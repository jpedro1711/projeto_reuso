# Introduction and Goals

O OnlyBooks é um aplicativo de:

- Gerenciamento de Livros
- Controle de Disponibilidade de Livros
- Interface intuitiva ao usuário
- Voltado para estudantes e corpo doscente

## Requirements Overview

Um sistema que permita o empréstimo de livros de maneira ágil e intuitiva. Será resolvido o problema de bibliotecas, que não usam tecnologia na gestão e administração de seus livros, o que resulta em perda de tempo com processos manuais e dificuldades em gerenciar livros.O sistema visa modernizar a gestão de bibliotecas, substituindo processos manuais por uma solução tecnológica ágil e intuitiva para o empréstimo e administração de livros. O sistema permitirá o cadastro e autenticação de usuários com nome completo, e-mail e senha, facilitando o login. Os usuários poderão visualizar livros em formato de catálogo, reservar livros disponíveis, filtrar por gênero, e acessar detalhes e avaliações dos livros. A busca e ordenação de livros serão possíveis por avaliação e status, com restrições para reservas de livros indisponíveis.
Administradores e bibliotecários poderão gerenciar e cadastrar livros, emitir relatórios sobre livros emprestados, e acompanhar empréstimos e reservas pendentes. O sistema garantirá respostas a consultas em até 10 segundos e será compatível com os principais navegadores web, com uma interface intuitiva e personalizável. Projetado de forma modular, o sistema permitirá fácil manutenção e adaptação a novas tecnologias e mudanças. Além disso, garantirá processos de login e autenticação rápidos e confiáveis, mantendo a precisão e consistência dos dados. O controle de versão será utilizado para o gerenciamento de código, e a documentação clara será fornecida para APIs, facilitando a integração com desenvolvedores externos.

Diagrama de caso de uso e documento listando os requisitos funcionais e não funcionais por número se encontra no [GitHub](https://github.com/jpedro1711/pjbl-arq-software).

## Quality Goals 

| **Meta de Qualidade**  | **Motivação/Justificação**                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| Performance/Eficiência | Escalabilidade do servidor em caso de sobrecarga de usuários                                  |
| Usabilidade            | Sistema deverá ser de fácil navegação para acomodar seus usuarios de perfis e faixas etárias variadas         |
| Compatibilidade        | Sistema deverá possuir facil integração com suas APIs                                                 |
| Adequação Funcional    | Sistema deverá se adequar aos requisitos pré-definidos no escopo                              |
| Mantenabilidade        | Sistema deverá ser de fácil manutenção e de fácil implantação de melhorias fisicas e digitais |

## Stakeholders 

| **Stakeholder** | **Expectativa**                                               | **Impacto** |
| --------------- | ------------------------------------------------------------- | ----------- |
| Bibliotecário   | Sistema intuitivo que facilite seu trabalho                   | Alto        |
| Estudante       | Sistema rápído que agilize processo de empréstimo de livros   | Médio       |
| Pesquisador     | Sistema que facilite encontrar artigos e materiais            | Médio       |
| Docente         | Sistema que permita encontrar materiais didáticos rapidamente | Médio       |
| Leitor Comum    | Sistema rapído que agilize processo de emprestimo de livros   | Baixo       |

_Alto = Impactado diretamente pelo sistema_ <br>
_Médio = Impactado indiretamente pelo sistema_ <br>
_Baixo = Pouco impactado pelo sistema_

# Architecture Constraints 

## Technical Constraints

- Stack de Linguagens: O sistema deverá ser desenvolvido utilizando a stack de linguagen aprovada previamente, que incluem C# para back-end e TypeScript para front-end, biblioteca React.
- Stack de Tecnologias: O sistema deverá ser desenvolvido utilizado stack de tecnologias aprovada, que incluem Microsoft Sql Server, MongoDB, e Redis para memória cache.
- Integração: O sistema deverá utlizar RESTful APIs para integração com sistemas externo. Todos as APIs deveram estar documentadas e estarem dentro do padrão de documentação de APIs da Microsoft Azure.

## Organizational Constraints

- Time: Guilherme Gruner Birckholz, Luiz Gustavo Chimenes Pinto, João Pedro Igeski Morais, João Vitor Wielewski de Assis e Otavio Dallo Costa.
- Agenda: Início em setembro de 2024, possuindo reuniões semanais aos sábados, além de encontros durante as aulas de Arquitetura de Soluções Cloud às segundas e sextas.
- Configuração e Sistema de Controle de Versão: Reposiório Git privado com histórico de commits e uma branch master pública públicada no GitHub com um link no documento Arch42 do projeto

# System Scope and Context

## Business Context 

### C4 Model nível 1![](https://mermaid.ink/img/pako:eNqNUslOwzAQ_ZXRnIqUViROl-QICK6IigvKxW2mxVJiFy8VperHcOQ7-mM4TboEtai-eDbPe2_Ga5yqnDDF-_heSUufNpPgjxW2IBivjKUSmgw8CD7XvIQu3IlJIZSlKc9k_eCZtFGy44zjWqgAMnw1bvvtbcg5TI71eDkHH45gTprkVHDwnQxoMqSX3sgJCrHUymR400KcOV-t5B71sXYvIh-Y1xUtRGUajOAE1wddw9YAAZULvf0xVpQNlZpMPamOEdXFj-OpIMd1sJLwl43XUApLOxotoKXw8gvx5ad_YAUHqj7amk4PWo2OMLXI_auzAi9KeqHiuM6zwp6uXVXVqrWn_9tdwxEDLL1mLnL_edcVTIb2nUrKMPVmTjPuCpthJje-lDurxis5xdRqRwFq5ebvmM54YbznFjm31PzufcmCyzelTl1M1_iJaTdigx4LRwljbHgbD4aDAFdVOB71kjAMfXoU9qOIsU2AX7sWrBclYT-JWD_px9EoHkSbX6loOKQ?type=png)
Disponível em: [GitHub](https://github.com/jpedro1711/pjbl-arq-software/blob/main/c4level1.png)

## Technical Context 

### C4 Model nível 2![](https://mermaid.ink/img/pako:eNqtV9tuIjcYfhXLV1mJhEMgCdyFQNpVsy3LJKrUUlWeGcNanbFZe8wWIh5m1Ytqe1v1CXix_h7PmaGwSUdRNP7t-f7D9x_MM_aET_EA33XvBI8I41TOOIInYlFAUSZEI0YWkoToHDlMRTQkyKdoyNyAiYh6ZMbtZxMqleBnWmkimWigGX5SevcZ3pFPkJufx4f30EdN0YJKyj1GECApJKmicgUvoDRgKynUDL8paZxrOC14qvXeLg9qziy3J0oahUp0NAp6QagTaxWiiIZLufuiIhYmplhjnLWJza9DoblP5PpM2VjlcTK66wOI36BnC2KeLPA51lyCbMz9VBC7aWSU-5WvSwhnn6h7u1ya4z9SF8Ercia3NgyJIGAeiSBcVni70bJIPRywGxMpVkyZKKNI-BAV-EvjHjCf-FRVmFwSSUpxmxd4UU23xELOqXm2aUwPhIMsWTESQ-L9diwQt5O3CxLRT2Q9vL-PPZ28Rd9YSRNEifu50Aqm1GeSxl6iOBc_aojC7s_dP-Bv7KFHwO2QeZAzkC6wJQo5kT6Z5fFBxxz0xEOSaDP8zkjP0-9NcjykiV71qOyVqkWqA_pPcqdULQVXu88rGqAlDURWECHlkQDuXK08UlOBtWaN3DOX8JJZgi8EGg2TAjSbBgzSRpTqOrZShmRDId7JblaS1VqumLA9KehjKF5qa7c-8uNCdYPj06QLnEpFHf5J8K8iCICzdlXToI4yVbHa2uG8fzjEV1nDAdZo2dW8n76QRroCX4da5aUPesdGeA5SM51iCqCz6uN0pWCNFMN-VfC-CGbEdwQ6nXHeE6Hm0DWhC_whQO1Eu01Huy9MyCc7Lg9kYzolT86_PbgDaK9Nt6yxNxDRMIaiLCDUCIRkG7s-LQGLZh_NPl1xYz_18rHz0mQjxghzkzCzsThs4o14lpkdREzMjlBTwso9TCVFMiqySMNw3cC1BKmIRLrQK0Hx7m8VTx8VSdGcMx4ftRz4R5rAtrQsDd5SWKY0yO9z-V3iKWKxWfEATFNDFlsQ3BWs6bLU2799fJw4TfM_M8moKF3gTlbTqHaYEzSl4HvXgXuygQPV6Z5jxVBOCauCUVOAxdtDGa7GtHq4fIb-D2CVNv9ViHUQe4n9KNkCiDLFi3ZfgKk4B3yRZGuBL2MSIkl-w4GY43Qts3QXllRrmUFNNJRMq5ixFznDbX5zg_LICT1J7wH-9wjf62QPu7_MOFaehHFj21NS2KMfLr4fP9bBpWZXblAHoQq-_OyMvvvlKGl1A_81hpYmKV8x0pxSj7oUwaxQZAH_Eqh3k_dHjXstWB79r0bCDRxSGCXMh9_EcT-f4egDDekMD-DVp3Oig2iGZ3wLR82Mc9bcw4NIatrAUujFBzyYk0DBSi99qL7kd3MmXRL-kxBh-gks8eAZ_44H55et7kX35qp3edO77Levu-1eA6-N_Kp9cXPV6ffavXa_22lfbht4E0N0Lm5aV71O67rVuW71-v1eb_svjXJYkQ?type=png)
Disponível em: [GitHub](https://github.com/jpedro1711/pjbl-arq-software/blob/main/c4modelLevel2.png)
