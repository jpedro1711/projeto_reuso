using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Models.Enums;

namespace OnlyBooksApi.Services.Interfaces
{
    public interface ILivroService
    {
        List<LivroResponseDto> GetAll();
        LivroResponseDto Create(CreateLivroDto entity);
        LivroResponseDto GetById(int id);
        LivroResponseDto Update(int id, LivroDto entity);
        LivroResponseDto AtualizarStatus(int id, StatusLivro novoStatus);
        LivroResponseDto AvaliarLivro(int id, int novaAvaliacao);
        void Delete(int id);
    }
}
