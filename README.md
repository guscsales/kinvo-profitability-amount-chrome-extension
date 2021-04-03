# Kinvo Profitability Amount Chrome Extension
---
[![Coverage Status](https://coveralls.io/repos/github/salesgu/kinvo-profitability-amount-chrome-extension/badge.svg)](https://coveralls.io/github/salesgu/kinvo-profitability-amount-chrome-extension)
---
## Resultado
![Image of feature running](readme/screenshot.png "Image of feature running")

## Motivação
<img src="https://raw.githubusercontent.com/salesgu/kinvo-profitability-amount-chrome-extension/main/readme/kinvo-motivation.jpeg" alt="Conversa com o time de atendimento do Kinvo" width="375" />

## O que é
Infelizmente a feature não foi desenvolvida de forma nativa, porém como eu gosto de saber o valor que tenho de rentabilidade, eu decidi criar essa extensão do Google Chrome (ou Brave) para exibir o valor em reais da rentabilidade da carteira selecionada.

## Features

- Exibir o valor da rentabilidade e aplicando a cor verde se for maior ou igual a zero e a cor vermelha se for menor que zero

## Install

Por enquanto ainda é manual, você pode executar o `yarn build` e [subir a pasta build manualmente](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest) na sessão de extensões do Chrome/Brave.

## Contribution

Feedbacks e pull requests são bem vidas!

### Rodando o projeto

#### Tempo de desenvolvimento
```
yarn install
yarn watch
```

#### Tempo de build
```
yarn build
```

#### Rodando extensão como desenvolvedor
A Google tem um [artigo que explica como colocar o pacote pra rodar](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest). O processo deve ser feito com o `yarn watch`.

#### Testes
```
yarn test
```

## Me siga nas redes sociais!

[![alt text](https://gussales-fe-73lfksp0l-salesgu.vercel.app/social-media-icons/twitter.png)](https://twitter.com/gussalesdev)
[![alt text](https://gussales-fe-73lfksp0l-salesgu.vercel.app/social-media-icons/instagram.png)](https://www.instagram.com/gussales.dev/)
[![alt text](https://gussales-fe-73lfksp0l-salesgu.vercel.app/social-media-icons/youtube.png)](https://canal.gsales.io)
[![alt text](https://gussales-fe-73lfksp0l-salesgu.vercel.app/social-media-icons/linkedin.png)](https://www.linkedin.com/in/gsaless/)
[![alt text](https://gussales-fe-73lfksp0l-salesgu.vercel.app/social-media-icons/site.png)](https://gsales.io)

---

This project was bootstrapped with [Chrome Extension CLI](https://github.com/dutiyesh/chrome-extension-cli)

