using Microsoft.EntityFrameworkCore;
using OnlyBooksApi.Data;
using OnlyBooksApi.Repositories;
using OnlyBooksApi.Repositories.Interfaces;
using OnlyBooksApi.Services;
using OnlyBooksApi.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddDbContext<OnlyBooksDbContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
}, ServiceLifetime.Transient);

builder.Services.AddScoped<IGeneroLivroRepository, GeneroLivroRepository>();
builder.Services.AddScoped<IGeneroLivroService, GeneroLivroService>();
builder.Services.AddScoped<ILivroService, LivroService>();
builder.Services.AddScoped<ILivroRepository, LivroRepository>();
builder.Services.AddScoped<IReservaService, ReservaService>();
builder.Services.AddScoped<IReservaRepository, ReservaRepository>();
builder.Services.AddScoped<IUsuarioService, UsuarioService>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IEmprestimoService, EmprestimoService>();
builder.Services.AddScoped<IEmprestimoRepository, EmprestimoRepository>();


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost5173",
        builder =>
        {
            builder.WithOrigins("http://localhost:5173")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();


//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
