using AutoMapper;
using OnlyBooksApi.Models.Dtos;

namespace OnlyBooksApi.Models.MappingProfiles
{
    public class LivroMapperProfile : Profile
    {
        public LivroMapperProfile() 
        {
            CreateMap<Livro, LivroDto>();
            CreateMap<Livro, CreateLivroDto>().ReverseMap();
            CreateMap<LivroDto, Livro>()
                .ForMember(dest => dest.GeneroLivroId, opt => opt.Ignore());
            CreateMap<LivroResponseDto, Livro>()
                .ForMember(dest => dest.GeneroLivroId, opt => opt.Ignore());
            CreateMap<Livro, LivroResponseDto>().ReverseMap();
        }
    }
}
