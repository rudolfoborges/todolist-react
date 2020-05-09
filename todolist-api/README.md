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
