# AGENDAMENTOS BARBEARIA


## Dependências de desenvolvimento:
1. **@types/cors:** v2.8.17
2. **@types/express:** v4.17.21
3. **@types/node:** v20.9.2
4. **@typescript-eslint/eslint-plugin:** v6.13.1
5. **@typescript-eslint/parser:** v6.13.1
6. **eslint:** v8.54.0
7. **prettier:** v3.1.0
8. **ts-node-dev:** v2.0.0
9. **tsconfig-paths:** v4.2.0
10. **typescript:** v5.3.2

## Dependências:
1. **cors:** v2.8.5
2. **express:** v4.18.2
3. **express-async-errors:** v3.1.1
4. **pg:** v8.11.3
5. **reflect-metadata:** v0.1.13
6. **typeorm:** v0.3.17

## Tabela Serviços
| Atributo    | Tipo       |
|-------------|------------|
| id (uuid)   | string     |
| name        | string     |
| description | string     |
| price       | number     |
| duration    | number     |
| status      | string     |

## Rotas validadas com o Celebrate/Joi
- **GET /services:**
  - Lista todos os serviços.

- **GET /services/:id:**
  - Obtém detalhes de um serviço específico.
  - Validação de parâmetros de caminho usando Joi.

- **POST /services:**
  - Cria um novo serviço.
  - Validação de dados no corpo da solicitação usando Joi.

- **PUT /services/:id:**
  - Atualiza informações de um serviço existente.
  - Validação de parâmetros de caminho e dados no corpo da solicitação usando Joi.

- **DELETE /services/:id:**
  - Exclui um serviço existente.
  - Validação de parâmetros de caminho usando Joi.
