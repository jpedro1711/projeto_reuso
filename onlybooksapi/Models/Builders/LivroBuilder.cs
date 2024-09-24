using OnlyBooksApi.Models;
using OnlyBooksApi.Models.Enums;

public class LivroBuilder
{
    private readonly Livro _livro;

    public LivroBuilder()
    {
        _livro = new Livro();
    }

    public LivroBuilder SetId(int id)
    {
        _livro.Id = id;
        return this;
    }

    public LivroBuilder SetTitulo(string titulo)
    {
        _livro.Titulo = titulo;
        return this;
    }

    public LivroBuilder SetAutor(string autor)
    {
        _livro.Autor = autor;
        return this;
    }

    public LivroBuilder SetStatus(StatusLivro status)
    {
        _livro.Status = status;
        return this;
    }

    public LivroBuilder SetNotaAvaliacao(double notaAvaliacao)
    {
        _livro.NotaAvaliacao = notaAvaliacao;
        return this;
    }

    public LivroBuilder SetSomaTotalAvaliacoes(int? somaTotalAvaliacoes)
    {
        _livro.SomaTotalAvaliaçoes = somaTotalAvaliacoes;
        return this;
    }

    public LivroBuilder SetTotalAvaliacoes(int? totalAvaliacoes)
    {
        _livro.TotalAvaliações = totalAvaliacoes;
        return this;
    }

    public LivroBuilder SetGeneroLivroId(int generoLivroId)
    {
        _livro.GeneroLivroId = generoLivroId;
        return this;
    }

    public LivroBuilder SetGenero(GeneroLivro? genero)
    {
        _livro.Genero = genero;
        return this;
    }

    public Livro Build()
    {
        return _livro;
    }
}
