using OnlyBooksApi.Models.Dtos;

namespace OnlyBooksApi.Services.Interfaces
{
    public interface IGeneroLivroService
    {
        List<GeneroLivroResponseDto> GetAll();
        GeneroLivroResponseDto Create(GeneroLivroDto entity);
        GeneroLivroResponseDto GetById(int id);
        GeneroLivroResponseDto Update(int id, GeneroLivroDto entity);
        void Delete(int id);
    }
}
