﻿using OnlyBooksApi.Models.Dtos;

namespace OnlyBooksApi.Services.Interfaces
{
    public interface IUsuarioService
    {
        List<UsuarioResponseDto> GetAll();
        UsuarioResponseDto Create(CreateOrUpdateUsuarioDto entity);
        UsuarioResponseDto GetById(int id);
        UsuarioResponseDto Update(int id, CreateOrUpdateUsuarioDto entity);
        void Delete(int id);
    }
}
