using AutoMapper;
using OnlyBooksApi.Models.Dtos;

namespace OnlyBooksApi.Models.MappingProfiles
{
    public class UsuarioMapperProfile : Profile
    {
        public UsuarioMapperProfile() 
        {
            CreateMap<Usuario, CreateOrUpdateUsuarioDto>().ReverseMap();
            CreateMap<Usuario, UsuarioResponseDto>().ReverseMap();
            CreateMap<UsuarioResponseDto, CreateOrUpdateUsuarioDto>().ReverseMap();
            CreateMap<UsuarioResponseDto, CreateOrUpdateUsuarioDto>().ReverseMap();
        }
    }
}
