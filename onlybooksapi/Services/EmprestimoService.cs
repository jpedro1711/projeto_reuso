using OnlyBooksApi.Exceptions;
using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Models.Enums;
using OnlyBooksApi.Models;
using OnlyBooksApi.Repositories.Interfaces;
using OnlyBooksApi.Services.Interfaces;
using AutoMapper;

namespace OnlyBooksApi.Services
{
    public class EmprestimoService : IEmprestimoService
    {
        private readonly IEmprestimoRepository _repository;
        private readonly IReservaRepository _reservaRepository;
        private readonly IReservaService _reservaService;
        private readonly IMapper _mapper;

        public EmprestimoService(IEmprestimoRepository repository, IMapper mapper, IReservaService reservaService)
        {
            _repository = repository;
            _mapper = mapper;
            _reservaService = reservaService;
        }

        public EmprestimoDto Create(CreateEmprestimoDto entity)
        {
            ReservaDto reserva = _reservaService.GetById(entity.ReservaId);

            Emprestimo emprestimo = new Emprestimo
            {
                ReservaId = (int)reserva.Id,
                DataDevolucao = entity.DataDevolucao,
            };

            _repository.Add(emprestimo);

            return _mapper.Map<EmprestimoDto>(emprestimo);
            
        }

        public List<EmprestimoDto> GetAll()
        {
            IEnumerable<Emprestimo> emprestimos = _repository.GetAll();

            List<EmprestimoDto> emprestimosDtos = _mapper.Map<List<EmprestimoDto>>(emprestimos);

            return emprestimosDtos;
        }

        public List<LivroResponseDto> GetLivrosEmprestados()
        {
            IEnumerable<Emprestimo> emprestimosAtivosOuAtrasados = _repository.GetAll()
                                                .Where(e => e.StatusEmprestimo == StatusEmprestimo.Ativo || e.StatusEmprestimo == StatusEmprestimo.Atrasado);

            List<LivroResponseDto> livros = new();

            foreach (Emprestimo e in emprestimosAtivosOuAtrasados)
            {
                List<Livro> livrosEmp = e.Reserva.Livros;

                foreach (Livro item in livrosEmp)
                {
                    livros.Add(_mapper.Map<LivroResponseDto>(item));
                }
            }

            return livros;

        }

        public EmprestimoDto GetById(int id)
        {
            Emprestimo emprestimo = _repository.GetById(id);

            if (emprestimo != null)
            {
                return _mapper.Map<EmprestimoDto>(emprestimo);
            }

            throw new EmprestimoException("Empréstimo não encontrado");
        }

        public EmprestimoDto UpdateStatus(int id, StatusEmprestimo novoStatus)
        {
            var emprestimoExistente = _repository.GetById(id);

            if (emprestimoExistente != null)
            {
                emprestimoExistente.StatusEmprestimo = novoStatus;
                _repository.Update(emprestimoExistente);
                return _mapper.Map<EmprestimoDto>(emprestimoExistente);
            }

            throw new EmprestimoException("Empréstimo não encontrado");
        }
    }
}
