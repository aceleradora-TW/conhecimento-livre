# Conhecimento Livre

![Build Status](https://travis-ci.org/aceleradora-TW/conhecimento-livre.svg?branch=master)

O Conhecimento Livre é uma plataforma de distribuição de conteúdo didático de maneira
gratuita. A ferramenta visa disponibilizar materiais para estudo, tanto na forma de texto quanto de vídeo, a pessoas que não teriam recursos financeiros para adquirí-los de outra maneira.

## Requisitos e recomendações para contribuir:

## Clonando o projeto
Será necessário que o projeto seja clonado, para clonar o projeto:
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
Para instalar o MongoDB:
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```
Para Ubuntu na versao 12.04:
```
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```
Para Ubuntu na versao 14.04:
```
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```
Para Ubuntu na versao 16.04:
```
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```
Para atualizar os pacotes locais execute o seguinte comando:
```
sudo apt-get update
```
Para instalar a ultima versão do MongoDB execute o seguinte comando:
```
sudo apt-get install -y mongodb-org
```
Para incializar o MongoDB execute o seguinte comando:
```
sudo service mongod start
```

## Levantando o servidor
Para levantar o servidor execute o seguinte comando, dentro do diretório conhecimento livre:

```
yarn start
```

## Acessar a pagina
Para acessar a página acesse a URL:


https://conhecimento-livre.herokuapp.com/

Para acessar em staging:


https://conhecimento-livre-staging.herokuapp.com/


Para acessar localmente na URL:
```
localhost:3000
```
