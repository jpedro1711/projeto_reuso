using AutoMapper;
using OnlyBooksApi.Exceptions;
using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Models;
using OnlyBooksApi.Repositories.Interfaces;
using OnlyBooksApi.Services.Interfaces;

namespace OnlyBooksApi.Services
{
    public class UsuarioService : IUsuarioService
    {
        private readonly IUsuarioRepository _repository;
        private readonly IMapper _mapper;

        public UsuarioService(IUsuarioRepository repository, IMapper mapper) 
        { 
            _repository = repository;
            _mapper = mapper;
        }

        public UsuarioResponseDto Create(CreateOrUpdateUsuarioDto entity)
        {
            Usuario usuario = _mapper.Map<Usuario>(entity);

            _repository.Add(usuario);

            return _mapper.Map<UsuarioResponseDto>(usuario);
        }

        public void Delete(int id)
        {
            Usuario usuario = _repository.GetById(id);

            if (usuario != null)
            {
                _repository.Delete(usuario);
                return;
            }

            throw new UsuarioException("Usuário não encontrado");
        }

        public List<UsuarioResponseDto> GetAll()
        {
            IEnumerable<Usuario> usuarios = _repository.GetAll();

            List<UsuarioResponseDto> usuariosDtos = _mapper.Map<List<UsuarioResponseDto>>(usuarios);

            return usuariosDtos;
        }

        public UsuarioResponseDto GetById(int id)
        {
            Usuario usuario = _repository.GetById(id);

            if (usuario != null)
            {
                return _mapper.Map<UsuarioResponseDto>(usuario);
            }

            throw new UsuarioException("Usuário não encontrado");
        }

        public UsuarioResponseDto Update(int id, CreateOrUpdateUsuarioDto dto)
        {
            Usuario usuarioExistente = _repository.GetById(id);

            if (usuarioExistente != null)
            {
                _mapper.Map(dto, usuarioExistente);

                _repository.Update(usuarioExistente);

                return _mapper.Map<UsuarioResponseDto>(usuarioExistente);
            }

            throw new UsuarioException("Usuário não encontrado");
        }
    }
}
