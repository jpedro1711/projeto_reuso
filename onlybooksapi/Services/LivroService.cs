﻿using AutoMapper;
using OnlyBooksApi.Exceptions;
using OnlyBooksApi.Models;
using OnlyBooksApi.Models.Dtos;
using OnlyBooksApi.Models.Enums;
using OnlyBooksApi.Repositories;
using OnlyBooksApi.Repositories.Interfaces;
using OnlyBooksApi.Services.Interfaces;

namespace OnlyBooksApi.Services
{
    public class LivroService : ILivroService
    {
        private readonly ILivroRepository _repository;
        private readonly IGeneroLivroService _generoLivroService;
        private readonly IMapper _mapper;
        public LivroService(ILivroRepository repository, IGeneroLivroService generoLivroService, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
            _generoLivroService = generoLivroService;
        }

        public LivroResponseDto Create(CreateLivroDto entity)
        {
            LivroBuilder livroBuilder = new LivroBuilder();

            Livro livro = livroBuilder
                    .SetTitulo(entity.Titulo)
                    .SetAutor(entity.Autor)
                    .SetGeneroLivroId(entity.GeneroLivroId)
            .Build();


            var genero = _generoLivroService.GetById(entity.GeneroLivroId);

            if (genero != null)
            {
                livro.GeneroLivroId = genero.id;
            }

            _repository.Add(livro);

            return _mapper.Map<LivroResponseDto>(livro);
        }

        public void Delete(int id)
        {
            Livro livro = _repository.GetById(id);

            if (livro != null)
            {
                _repository.Delete(livro);
                return;
            }

            throw new LivroException("Livro não encontrado");
        }

        public List<LivroResponseDto> GetAll()
        {
            IEnumerable<Livro> livros = _repository.GetAll();

            List<LivroResponseDto> livrosDtos = _mapper.Map<List<LivroResponseDto>>(livros);

            return livrosDtos;
        }

        public LivroResponseDto GetById(int id)
        {
            Livro livro = _repository.GetById(id);

            if (livro != null)
            {
                return _mapper.Map<LivroResponseDto>(livro);
            }

            throw new LivroException("Livro não encontrado");
        }

        public LivroResponseDto Update(int id, LivroDto dto)
        {
            Livro livroExistente = _repository.GetById(id);
 
            if (livroExistente != null)
            {
                _mapper.Map(dto, livroExistente);

                _repository.Update(livroExistente);

                return _mapper.Map<LivroResponseDto>(livroExistente);
            }

            throw new LivroException("Livro não encontrado");
        }

        public LivroResponseDto AtualizarStatus(int id, StatusLivro novoStatus)
        {
            Livro livroExistente = _repository.GetById(id);

            if (livroExistente != null)
            {
                livroExistente.Status = novoStatus;
                _repository.Update(livroExistente);

                return _mapper.Map<LivroResponseDto>(livroExistente);
            }

            throw new LivroException("Livro não encontrado");
        }

        public LivroResponseDto AvaliarLivro(int id, int novaNota)
        {
            Livro livro = _repository.GetById(id);

            if (livro != null)
            {
                var totalAvaliacoes = livro.TotalAvaliações;
                int somaTotalAvaliacoes = livro.SomaTotalAvaliaçoes ?? 1;

                totalAvaliacoes += 1;
                somaTotalAvaliacoes += novaNota;

                double novaMediaAvaliacao = somaTotalAvaliacoes / (double)(totalAvaliacoes ?? 1);

                livro.NotaAvaliacao = novaMediaAvaliacao;
                livro.TotalAvaliações = totalAvaliacoes;
                livro.SomaTotalAvaliaçoes = somaTotalAvaliacoes;

                _repository.Update(livro);

                return _mapper.Map<LivroResponseDto>(livro);

            }

            throw new LivroException("Livro não encontrado");
        }
    }
}
