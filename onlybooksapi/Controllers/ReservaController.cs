﻿using Microsoft.AspNetCore.Mvc;
using OnlyBooksApi.Exceptions;
using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Models.Enums;
using OnlyBooksApi.Services.Interfaces;

namespace OnlyBooksApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReservaController : ControllerBase
    {
        private IReservaService _service;

        public ReservaController(IReservaService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<ReservaDto>> Listar()
        {
            return Ok(_service.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult BuscarReserva(int id)
        {
            try
            {
                var reserva = _service.GetById(id);
                return Ok(reserva);
            }
            catch (ReservaException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("usuario")]
        public IActionResult GetReservaPorUsuario([FromQuery] string userEmail)
        {
            return Ok(_service.GetByUserEmail(userEmail));
        }

        [HttpPost]
        public ActionResult CriarReserva([FromBody] CreateReservaDto reserva)
        {
            try
            {
                ReservaDto created = _service.Create(reserva);

                return CreatedAtAction(nameof(BuscarReserva), new { id = created.Id }, created);
            }
            catch (UsuarioException ex)
            {
                return BadRequest(ex.Message);
            }

        }


        [HttpPatch("atualizarStatus")]
        public IActionResult AtualizarStatus([FromQuery] int id, [FromQuery] StatusReserva novoStatus)
        {
            try
            {
                ReservaDto reservaDto = _service.UpdateStatus(id, novoStatus);
                return Ok(reservaDto);

            }
            catch (ReservaException ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
