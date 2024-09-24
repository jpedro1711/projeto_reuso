using OnlyBooksApi.Models;

namespace OnlyBooksApi.Repositories.Interfaces
{
    public interface IReservaRepository
    {
        IEnumerable<Reserva> GetAll();
        Reserva GetById(int id);
        List<Reserva> GetList();
        void Add(Reserva reserva);
        void Update(Reserva reserva);
        void Delete(Reserva reserva);
        IQueryable<Reserva> GetByuserEmail(string userEmail);
    }
}
