using Microsoft.EntityFrameworkCore;
using OnlyBooksApi.Data;
using OnlyBooksApi.Models;
using OnlyBooksApi.Repositories.Interfaces;

namespace OnlyBooksApi.Repositories
{
    public class LivroRepository : ILivroRepository
    {
        private readonly OnlyBooksDbContext _context;
        public LivroRepository(OnlyBooksDbContext dbContext)
        {
            _context = dbContext;
        }

        public void Add(Livro livro)
        {
            _context.Livros.Add(livro);
            _context.SaveChanges();
        }

        public void Delete(Livro livro)
        {
            _context.Livros.Remove(livro);
            _context.SaveChanges();
        }

        public IEnumerable<Livro> GetAll()
        {
            return _context.Livros.Include(l => l.Genero);
        }

        public Livro GetById(int id)
        {
            return _context.Livros.Include(l => l.Genero).AsNoTracking().FirstOrDefault(x => x.Id == id);
        }

        public Livro GetAsNoTracking(int id)
        {
            return _context.Livros.AsNoTracking().FirstOrDefault(x => x.Id == id);
        }

        public List<Livro> GetList()
        {
            return _context.Livros.ToList();
        }

        public void Update(Livro livro)
        {
            _context.Livros.Update(livro);
            _context.SaveChanges();
        }
    }
}
