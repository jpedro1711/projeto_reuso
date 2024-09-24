using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Models.Enums;

namespace OnlyBooksApi.Services.Interfaces
{
    public interface IEmprestimoService
    {
        List<EmprestimoDto> GetAll();
        List<LivroResponseDto> GetLivrosEmprestados();
        EmprestimoDto Create(CreateEmprestimoDto entity);
        EmprestimoDto GetById(int id);
        EmprestimoDto UpdateStatus(int id, StatusEmprestimo novoStatus);
    }
}
