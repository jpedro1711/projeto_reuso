using OnlyBooksApi.Models;
using OnlyBooksApi.Models.Enums;
using System;
using System.Collections.Generic;

public class ReservaBuilder
{
    private readonly Reserva _reserva;

    public ReservaBuilder()
    {
        _reserva = new Reserva();
    }

    public ReservaBuilder SetId(int id)
    {
        _reserva.Id = id;
        return this;
    }

    public ReservaBuilder SetStatusReserva(StatusReserva statusReserva)
    {
        _reserva.StatusReserva = statusReserva;
        return this;
    }

    public ReservaBuilder SetDataReserva(DateTime dataReserva)
    {
        _reserva.DataReserva = dataReserva;
        return this;
    }

    public ReservaBuilder SetUsuarioId(int usuarioId)
    {
        _reserva.UsuarioId = usuarioId;
        return this;
    }

    public ReservaBuilder SetUsuario(Usuario usuario)
    {
        _reserva.Usuario = usuario;
        return this;
    }

    public ReservaBuilder SetLivros(List<Livro> livros)
    {
        _reserva.Livros = livros;
        return this;
    }

    public ReservaBuilder AddLivro(Livro livro)
    {
        _reserva.Livros.Add(livro);
        return this;
    }

    public Reserva Build()
    {
        return _reserva;
    }
}
