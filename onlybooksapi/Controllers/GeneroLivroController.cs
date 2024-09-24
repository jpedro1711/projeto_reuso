using Microsoft.AspNetCore.Mvc;
using OnlyBooksApi.Exceptions;
using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Services.Interfaces;

namespace OnlyBooksApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GeneroLivroController : ControllerBase
    {
        private IGeneroLivroService _service;
        public GeneroLivroController(IGeneroLivroService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<GeneroLivroDto>> Listar()
        {
            return Ok(_service.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult BuscarGenero(int id)
        {
            try
            {
                var generoLivro = _service.GetById(id);
                return Ok(generoLivro);
            }
            catch (GeneroLivroException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult CriarGeneroLivro([FromBody] GeneroLivroDto generoLivro)
        {
            GeneroLivroResponseDto created = _service.Create(generoLivro);

            return CreatedAtAction(nameof(BuscarGenero), new { id = created.id }, created);
        }

        [HttpDelete]
        public IActionResult Remover(int id)
        {
            try
            {
                _service.Delete(id);
                return NoContent();
            }
            catch (GeneroLivroException ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("{id}")]
        public IActionResult Atualizar(int id, [FromBody] GeneroLivroDto genero)
        {
            try
            {
                GeneroLivroResponseDto generoLivroDto = _service.Update(id, genero);

                return Ok(generoLivroDto);
            }
            catch (GeneroLivroException ex)
            {
                return NotFound(ex.Message);
            }

        }

    }
}
