using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Models.Enums;

namespace OnlyBooksApi.Services.Interfaces
{
    public interface IReservaService
    {
        List<ReservaDto> GetAll();
        ReservaDto Create(CreateReservaDto entity);
        ReservaDto GetById(int id);
        ReservaDto UpdateStatus(int id, StatusReserva novoStatus);
        List<ReservaDto> GetByUserEmail(string email);
    }
}
