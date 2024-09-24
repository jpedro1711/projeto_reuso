﻿using Microsoft.AspNetCore.Mvc;
using OnlyBooksApi.Exceptions;
using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Models.Enums;
using OnlyBooksApi.Services.Interfaces;

namespace OnlyBooksApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LivroController : ControllerBase
    {
        private ILivroService _service;

        public LivroController(ILivroService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<LivroResponseDto>> Listar()
        {
            return Ok(_service.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult BuscarLivro(int id)
        {
            try
            {
                var livro = _service.GetById(id);
                return Ok(livro);
            }
            catch (LivroException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult CriarLivro([FromBody] CreateLivroDto livro)
        {
            try
            {
                LivroResponseDto created = _service.Create(livro);

                return CreatedAtAction(nameof(BuscarLivro), new { id = created.Id }, created);
            }
            catch (GeneroLivroException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete]
        public IActionResult Remover(int id)
        {
            try
            {
                _service.Delete(id);
                return NoContent();
            }
            catch (LivroException ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, [FromBody] LivroDto livro)
        {
            try
            {
                LivroResponseDto generoLivroDto = _service.Update(id, livro);

                return Ok(generoLivroDto);
            }
            catch (LivroException ex)
            {
                return NotFound(ex.Message);
            }

        }

        [HttpPatch("atualizarStatus")]
        public IActionResult AtualizarStatus([FromQuery] int id, [FromQuery] StatusLivro novoStatus)
        {
            try
            {
                LivroResponseDto dto = _service.AtualizarStatus(id, novoStatus);

                return Ok(dto);
            }
            catch (LivroException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPatch("avaliar")]
        public IActionResult Avaliar([FromQuery] int id, [FromQuery] int novaNota)
        {
            try
            {
                LivroResponseDto dto = _service.AvaliarLivro(id, novaNota);

                return Ok(dto);
            }
            catch (LivroException ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
