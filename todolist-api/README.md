# Metas
- () Cadastrar e listar usuários
- () Criar password seguro
- () Listar Usuários ordenados por nome
- () Cadastrar Tasks
- () Listar tasks ordenadas por data de cadastro não concluídas
- () Permitir a marcar uma tasks com concluída
- () Validar se o usuário tem permissão para marcar uma task como concluída
- () Remover um task
- () Validar se o usuário tem permissão para remover uma tasks
- () Exibir informações de uma task por id
- () Gerar token JWT para usuários logados (Login)
- () Criar sessão para usuários logados
- () Validar se o usuário fez login antes de realizar algumas ações

# Comandos para criar o projeto
- Iniciar um projeto: yarn init (Vai criar o package.json com as informaçãoes iniciais)
- Instalar o typescript: yarn add typescript -D
- Configurar o typescript: npx typescript --init (Vai criar o arquivo tsconfig.json)

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
### Comandos
- yarn typeorm migration:create -n CreateUsers
- yarn typeorm migration:run
- yarn typeorm migration:revert
- yarn typeorm entity:create -n User
