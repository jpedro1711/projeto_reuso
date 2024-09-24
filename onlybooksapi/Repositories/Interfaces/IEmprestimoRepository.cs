using OnlyBooksApi.Models;

namespace OnlyBooksApi.Repositories.Interfaces
{
    public interface IEmprestimoRepository
    {
        IEnumerable<Emprestimo> GetAll();
        Emprestimo GetById(int id);
        Emprestimo GetAsNoTracking(int id);
        List<Emprestimo> GetList();
        void Add(Emprestimo emprestimo);
        void Update(Emprestimo emprestimo);
        void Delete(Emprestimo emprestimo);
    }
}
