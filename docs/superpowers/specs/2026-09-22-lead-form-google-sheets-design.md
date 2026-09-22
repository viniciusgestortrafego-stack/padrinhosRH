# Formulário de contato e captação de leads

## Objetivo

Adicionar um formulário de conversão à seção “Da sua necessidade a uma proposta com direção”, registrar cada envio na planilha indicada pela Padrinhos RH e, após a confirmação do registro, abrir o WhatsApp com uma mensagem personalizada.

## Experiência da página

O formulário será incorporado à mesma composição editorial das três etapas. Em desktop, ficará associado visualmente à coluna das etapas, com espaçamento suficiente para preservar a leitura. Em telas menores, aparecerá depois das etapas em uma sequência vertical.

Os campos serão:

- Nome
- E-mail
- Telefone
- Empresa

Todos serão obrigatórios. O formulário terá rótulos visíveis, mensagens de erro específicas e estados de envio, sucesso e falha. O botão principal usará uma chamada direta, como “Enviar e continuar no WhatsApp”.

## Navegação por âncoras

Os botões de chamada para ação deixarão de abrir o WhatsApp imediatamente. Eles conduzirão o visitante progressivamente pelas principais seções da página até o formulário:

1. Cabeçalho e hero: soluções.
2. Soluções: metodologias.
3. Metodologias: quem somos.
4. Chamadas posteriores: seção de etapas e formulário.
5. Envio do formulário: WhatsApp.

A rolagem respeitará o cabeçalho fixo e o foco de teclado será preservado para acessibilidade.

## Integração com a planilha

Um Google Apps Script vinculado à planilha receberá uma requisição do site. O backend validará os quatro campos, normalizará os valores e adicionará uma linha com:

1. Data e hora do envio
2. Nome
3. E-mail
4. Telefone
5. Empresa
6. Origem do contato

O endpoint retornará uma resposta de sucesso somente depois que a linha for gravada. O site não armazenará credenciais do Google.

## Fluxo de envio

1. O navegador valida os campos obrigatórios e o formato básico do e-mail.
2. O botão entra em estado de processamento para impedir envios duplicados.
3. O site envia os dados ao endpoint do Google Apps Script.
4. O backend valida e grava a nova linha na planilha.
5. Após a confirmação, o navegador abre o WhatsApp com nome, empresa, e-mail e telefone em uma mensagem pré-preenchida.
6. Se o registro falhar, os dados permanecem preenchidos e o visitante recebe uma mensagem clara para tentar novamente.

## Segurança e integridade

O Apps Script aceitará apenas os campos previstos, limitará o tamanho de cada valor e escapará fórmulas iniciadas por caracteres especiais antes de gravar na planilha. O formulário usará um campo invisível contra preenchimentos automatizados e bloqueará submissões repetidas durante o processamento.

## Verificação

A implementação será testada em desktop e mobile. A validação incluirá campos vazios, e-mail inválido, envio duplicado, registro efetivo na planilha, tratamento de falha e abertura do WhatsApp somente após o sucesso.
