# 🃏 Pokemon Card Dealer
##### Feito por Rafael Braga Santos

![Build Status](https://github.com/C14-INATEL/pokemon-card-dealer/actions/workflows/pipeline.yml/badge.svg)
![Node Version](https://img.shields.io/badge/node-18.x-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue)

## 🚀 O Projeto
O **Pokemon Card Dealer** é um motor de lógica para gerenciamento de decks de cartas Pokémon, desenvolvido em **TypeScript + Node.js**.

## 📁 Estrutura do Projeto
```
pokemon-card-dealer/
├── .github/
│   └── workflows/
│       └── pipeline.yml
├── src/
│   ├── domain/
│   │   ├── types.ts
│   │   └── CardDealer.ts
│   └── __tests__/
│       └── CardDealer.test.ts
├── jest.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Instalação
```bash
npm ci
```


## 🧪 Executar Testes
```bash
npm test
```

O relatório de cobertura será gerado em `coverage/lcov-report/index.html`.

└── É publicado automaticamente via GitHub Pages a cada execução do pipeline:

🔗 [Ver relatório de cobertura](https://c14-inatel.github.io/pokemon-card-dealer/)

---

## 🏗️ Build
```bash
npm run build
```
Os artefatos compilados são gerados no diretório `dist/`.

---

## 🔄 Pipeline CI/CD

O pipeline é executado automaticamente a cada `push` ou `pull_request` na branch `main`, com os seguintes jobs:

| Job | Descrição | Dependência |
|---|---|---|
| `testes` | Executa os 20 testes unitários e gera relatório de cobertura | — |
| `build` | Compila o TypeScript e empacota o `dist.zip` | — |
| `deploy` | Publica o relatório de cobertura no GitHub Pages | `testes` + `build` |
| `notificacao` | Envia e-mail com o status do pipeline | `deploy` |

---


## 🤖 Uso de Inteligência Artificial

#### Utilizado Claude IA: Auxílio na construção do pipeline CI/CD

**Prompt utilizado:**

> Você é um Dev Sênior experiente em CI/CD e GitHub Actions. Você está em uma sessão de pair programming com um Dev Júnior (eu), me ajudando a construir um pipeline, use como padrão o maven.yml em anexo ("Pipeline desenvolvido em aula"), e siga os requisitos técnicos:
> #### - **Jobs obrigatórios**:
> - `testes`: executa os testes unitários automaticamente
> - `build`: gera o pacote distribuível do projeto
> - `notificacao`: envia e-mail ao final da execução
> - `deploy`: publica automaticamente no GitHub Pages
> #### - **Regras estruturais**:
>  - Mínimo de 3 jobs distintos
>  - Os jobs `testes` e `build` devem rodar em PARALELO (sem `needs` entre si)
>  - O job `deploy` só roda após ambos `testes` e `build` passarem
>  - O job `notificacao` roda sempre ao final, mesmo em caso de falha
>#### - Use como padrão o maven.yml em anexo ("Pipeline desenvolvido em aula"), para me auxiliar na adaptação adequada para meu projeto

**Resultado:** ✅ Satisfatório. A abordagem de pair programming foi eficaz para fixar os aprendizados sobre a estrutura de um pipeline e o auxílio para a implementação do GitHub Actions no projeto. Embora tenha sido satisfatório foram necessários ajustes como nomes de actions, correção de indentação e ajuste das variáveis secrets.
