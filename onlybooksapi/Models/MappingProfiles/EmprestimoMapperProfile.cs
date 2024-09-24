using AutoMapper;
using OnlyBooksApi.Models.Dtos;

namespace OnlyBooksApi.Models.MappingProfiles
{
    public class EmprestimoMapperProfile : Profile
    {
        public EmprestimoMapperProfile() 
        {
            CreateMap<Emprestimo, EmprestimoDto>().ReverseMap();
            CreateMap<Emprestimo, CreateEmprestimoDto>().ReverseMap();
            CreateMap<CreateEmprestimoDto, EmprestimoDto>().ReverseMap();
        }
    }
}
