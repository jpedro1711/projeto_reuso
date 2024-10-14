﻿using OnlyBooksApi.Core.Exceptions;
using System.Net;
using System.Net.Mime;
using System.Text.Json;

public class ErrorMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger _log;

    public ErrorMiddleware(RequestDelegate next, ILoggerFactory log)
    {
        _next = next;
        _log = log.CreateLogger("Error handler");
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _log.LogError(ex, ex.Message);
            await HandleException(context, ex);
        }
    }

    private async Task HandleException(HttpContext context, Exception e)
    {
        context.Response.ContentType = MediaTypeNames.Application.Json;

        context.Response.StatusCode = e switch
        {
            NotFoundException => (int)HttpStatusCode.NotFound,
            BadRequestException => (int)HttpStatusCode.BadRequest,
            _ => (int)HttpStatusCode.InternalServerError 
        };

        var result = JsonSerializer.Serialize(new { message = e.Message });
        await context.Response.WriteAsync(result);
    }
}
