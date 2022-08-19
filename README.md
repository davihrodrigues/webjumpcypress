### Projeto de automação web da WebJump

### Passo a passo para instalação
1. Baixar o Node atráves do link: https://nodejs.org/en/
2. Instalar o Node
3. Verificar se o Node Foi instalado corretamente abrindo o cmd e digitando: $ node --version
4. Instalar o npm no path do computador atráves do comando: $ npm install
5. Verificar se o npm foi instalado corretamente atráves do comando: $ npm --version
6. Instalar cypress atráves do comando: $ npm install cypress --save-dev
7. Verificar se o cypress foi instalado corretamente atráves do comando: npx cypress --version
8. Instalar o cypress iframe atráves do comando: npm install -D cypress-iframe

### Execução
 npm run test

### Interação com a ferramenta
Deve-se utilizar o padrão page_objects para criar novas funções.
Fixtures para adicionar novos identificadores.
Os cenários estão localizados na pasta e2e.


