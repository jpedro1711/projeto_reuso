﻿namespace OnlyBooksApi.Core.Models.Dtos
{
    public record CreateEmprestimoDto
    {
        public int ReservaId { get; set; }
        public DateTime DataDevolucao { get; set; }
    }
}
