# Estágio base
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081
ENV ASPNETCORE_ENVIRONMENT=Development

# Estágio build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Copie o arquivo de projeto e restaure as dependências
COPY ["OnlyBooksApi.csproj", "."]
RUN dotnet restore "./OnlyBooksApi.csproj"

# Copie o restante do código-fonte e construa a aplicação
COPY . .
WORKDIR "/src/."
RUN dotnet build "OnlyBooksApi.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Estágio publish
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "OnlyBooksApi.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Estágio final
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "OnlyBooksApi.dll"]
