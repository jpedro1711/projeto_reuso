using Microsoft.AspNetCore.Mvc;
using OnlyBooksApi.Exceptions;
using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Models.Enums;
using OnlyBooksApi.Services.Interfaces;

namespace OnlyBooksApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmprestimoController : ControllerBase
    {
        private IEmprestimoService _service;

        public EmprestimoController(IEmprestimoService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<EmprestimoDto>> Listar()
        {
            return Ok(_service.GetAll());
        }

        [HttpGet("livrosEmprestados")]
        public ActionResult<List<LivroDto>> GetLivrosEmprestados()
        {
            return Ok(_service.GetLivrosEmprestados());
        }

        [HttpGet("{id}")]
        public ActionResult BuscarEmprestimo(int id)
        {
            try
            {
                var emprestimo = _service.GetById(id);
                return Ok(emprestimo);
            }
            catch (EmprestimoException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult CriarEmprestimo([FromBody] CreateEmprestimoDto emprestimo)
        {
            try
            {
                EmprestimoDto created = _service.Create(emprestimo);

                return CreatedAtAction(nameof(BuscarEmprestimo), new { id = created.Id }, created);
            }
            catch (ReservaException ex)
            {
                return BadRequest(ex.Message);
            }

        }


        [HttpPatch("atualizarStatus")]
        public IActionResult AtualizarStatus([FromQuery] int id, [FromQuery] StatusEmprestimo novoStatus)
        {
            try
            {
                EmprestimoDto emprestimoDto = _service.UpdateStatus(id, novoStatus);
                return Ok(emprestimoDto);

            }
            catch (ReservaException ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
