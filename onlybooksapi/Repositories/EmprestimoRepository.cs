using Microsoft.EntityFrameworkCore;
using OnlyBooksApi.Data;
using OnlyBooksApi.Models;
using OnlyBooksApi.Repositories.Interfaces;

namespace OnlyBooksApi.Repositories
{
    public class EmprestimoRepository : IEmprestimoRepository
    {
        private readonly OnlyBooksDbContext _context;
        public EmprestimoRepository(OnlyBooksDbContext dbContext)
        {
            _context = dbContext;
        }

        public void Add(Emprestimo emprestimo)
        {
            _context.Emprestimos.Add(emprestimo);
            _context.SaveChanges();
        }

        public void Delete(Emprestimo emprestimo)
        {
            _context.Emprestimos.Remove(emprestimo);
            _context.SaveChanges();
        }

        public IEnumerable<Emprestimo> GetAll()
        {
            return _context.Emprestimos.Include(e => e.Reserva).ThenInclude(r => r.Livros);
        }

        public Emprestimo GetById(int id)
        {
            return _context.Emprestimos.FirstOrDefault(x => x.Id == id);
        }

        public Emprestimo GetAsNoTracking(int id)
        {
            return _context.Emprestimos.FirstOrDefault(x => x.Id == id);
        }

        public List<Emprestimo> GetList()
        {
            return _context.Emprestimos.ToList();
        }

        public void Update(Emprestimo emprestimo)
        {
            _context.Emprestimos.Update(emprestimo);
            _context.SaveChanges();
        }
    }
}
