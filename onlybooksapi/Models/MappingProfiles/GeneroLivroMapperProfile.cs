using AutoMapper;
using OnlyBooksApi.Models.Dtos;

namespace OnlyBooksApi.Models.MappingProfiles
{
    public class GeneroLivroMapperProfile : Profile
    {
        public GeneroLivroMapperProfile() 
        {
            CreateMap<GeneroLivro, GeneroLivroDto>();
            CreateMap<GeneroLivroDto, GeneroLivro>();
            CreateMap<GeneroLivroResponseDto, GeneroLivro>().ReverseMap();
            CreateMap<GeneroLivroDto, GeneroLivro>().ReverseMap();
        }
    }
}
