# Conhecimento Livre

![Build Status](https://travis-ci.org/aceleradora-TW/conhecimento-livre.svg?branch=master)

O Conhecimento Livre é uma plataforma de distribuição de conteúdo didático de maneira
gratuita. A ferramenta visa disponibilizar materiais para estudo, tanto na forma de texto quanto de vídeo, a pessoas que não teriam recursos financeiros para adquirí-los de outra maneira.

## Pré-requisitos minimos para contribuir
* Ubuntu 12.04;
* Node.js 4;
* MongoDB 3;
* Yarn ou npm.

Certifique-se de possuir o Git instalado no seu Ubuntu. Caso não possua, insira os comandos a seguir no terminal:
```
sudo apt-get update
sudo apt-get install git
```


## Instalando o Node.js:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```
```
sudo apt-get update
sudo apt-get install -y nodejs
```
```
sudo apt-get install -y build-essential
```


## Instalando e iniciando o MongoDB

Inicialmente, insira o seguinte comando:
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```


**Verifique a versão do seu Ubuntu e insera apenas um dos comandos abaixo de acordo com a sua versão.**


* Ubuntu 12.04:
```
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```
* Ubuntu 14.04:
```
echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```
* Ubuntu 16.04:
```
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```


Instalando o MongoDB:
```
sudo apt-get update
sudo apt-get install -y mongodb-org
```
Para inicializar o MongoDB execute o seguinte comando:
```
sudo service mongod start
```
**Por padrão, sempre que ligar o seu computador, terá que inicializar o MongoDB antes de rodar a sua aplicação.**


## Instalando o Yarn
Primeiramente, configure o repositório:  
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```  
Para obter a última atualização e instalar:  
```
sudo apt-get update
sudo apt-get install yarn
```

## Fork do projeto

No GitHub, na página do [Conhecimento Livre](https://github.com/aceleradora-TW/conhecimento-livre), clique em **Fork** para adicionar o projeto em seu repositório.

Abra o terminal e cole o seguinte comando para obter uma cópia do repositório:
```
git clone https://github.com/<SEU-USUARIO>/conhecimento-livre.git
```
Instalando as dependências:
```
cd conhecimento-livre/
yarn install
```
**

## Inserindo URL nas variáveis de ambiente

Para logar no banco, é necessário que insira a URL como variável de ambiente:
```
echo 'export DATABASELOGIN="localhost:27017/conhecimento-livre-dev"' >> ~/.bashrc
```

*Após exportar a variável de ambiente, faça logoff para que o sistema atualize as variáveis.*


## Populando o banco local
É necessário adicionar o primeiro curso ao projeto. No diretório ```/conhecimento-livre``` digite:
```
mongoimport --db conhecimento-livre-dev --collection authors --drop --file authors.json
```
```
mongoimport --db conhecimento-livre-dev --collection admins --drop --file admins.json
```
Você pode gerenciar seus cursos no painel de admin. Login padrão: ```Usuario:admin Senha:password```

## Iniciando o servidor
Para iniciar o servidor, execute o seguinte comando, dentro do diretório ```/conhecimento-livre```:
```
yarn start
```


## Acessando a pagina

* Acessar localmente o projeto:

  http://localhost:3000


* Acessar o painel do administrador:

  http://localhost:3000/admin


* Nossa URL:

  http://www.conhecimentolivre.com.br

* URL Staging:

  http://staging.conhecimentolivre.com.br
