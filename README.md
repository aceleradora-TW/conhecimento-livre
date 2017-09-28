# Conhecimento Livre

![Build Status](https://travis-ci.org/aceleradora-TW/conhecimento-livre.svg?branch=master)

O Conhecimento Livre é uma plataforma de distribuição de conteúdo didático de maneira
gratuita. A ferramenta visa disponibilizar materiais para estudo, tanto na forma de texto quanto de vídeo, a pessoas que não teriam recursos financeiros para adquirí-los de outra maneira.

## Requisitos e recomendações para contribuir

## Clonando o projeto
Abra o terminal e cole o seguinte comando para obter uma cópia do repositório:  
```
git clone https://github.com/aceleradora-TW/conhecimento-livre.git
```

## Instalando o Yarn e as dependências
Para configurar o repositório:  
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - 
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```  
Para obter a última atualização e instalar:  
```
sudo apt-get update
sudo apt-get install yarn
``` 
Para instalar as dependências do projeto:
```
cd conhecimento-livre/
yarn install
```

## Instalando e iniciando o MongoDB

## Levantando o servidor
