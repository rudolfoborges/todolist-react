# Metas
- (X) Cadastrar e listar usuários
- (X) Criar password seguro
- (X) Listar Usuários ordenados por nome
- (X) Cadastrar Tasks
- (X) Listar tasks ordenadas por data de cadastro
- (X) Permitir a marcar uma tasks com concluída
- (X) Validar se o usuário tem permissão para marcar uma task como concluída
- (X) Remover um task
- (X) Validar se o usuário tem permissão para remover uma tasks
- (X) Exibir informações de uma task por id
- (X) Gerar token JWT para usuários logados (Login)
- (X) Criar sessão para usuários logados
- (X) Validar se o usuário fez login antes de realizar algumas ações
- () Handler de Error

# Comandos para criar o projeto
- Iniciar um projeto: yarn init / npm init (Vai criar o package.json com as informaçãoes iniciais)
- Instalar o typescript: yarn add typescript -D / npm install typescript -D
- Configurar o typescript: *npx typescript --init* (Vai criar o arquivo tsconfig.json)
- Recomendo copiar o tsconfig.json de um projeto para outro

# Configurar ESLINT
- instalar as depedências:
- yarn add eslint prettier eslint-config-airbnb-base eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
- Copiar os arquivos .eslint.js .eslintignore .prettierrc.js e colar na raiz do projeto

# Plugins VSCode
- eslint
- prettier

# ORM
- Typeorm
- Site: typeorm.io
- ormconfig.js => Arquivo de configuração do banco de dados
### Comandos
- yarn typeorm migration:create -n CreateUsers / npm run typeorm migration:create -n CreateUsers
- yarn typeorm migration:run / npm run typeorm migration:run
- yarn typeorm migration:revert / npm run typeorm migration:revert
- yarn typeorm entity:create -n User
