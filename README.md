# Portfólio — Lívia Soares Lopes

Site de portfólio pessoal bilíngue (PT/EN), responsivo e sem dependências externas
além da fonte Inter. Construído apenas com HTML5, CSS3 e JavaScript puro.

```
portifolio/
├── index.html          # Estrutura semântica e conteúdo
├── style.css           # Design, responsividade e animações
├── script.js           # Troca de idioma, menu, rolagem e animações
├── assets/
│   ├── foto-livia.jpg  # Fotografia principal (1254 × 1254 px)
│   └── favicon.svg     # Ícone da aba do navegador
└── README.md
```

## Como abrir

1. Abra a pasta `portifolio`.
2. Dê duplo clique em `index.html` (ou arraste o arquivo para o navegador).
   Ou, na pasta, rode `python3 -m http.server 8000` e acesse `http://localhost:8000`.

Para publicar: envie a pasta inteira para o GitHub e ative **GitHub Pages**
(*Settings → Pages → Source: branch main, folder /root*), ou arraste a pasta
para [netlify.com/drop].

## Colocar a sua foto

1. Salve a fotografia como `assets/foto-livia.jpg` (JPEG, cerca de 1000–1500 px).
2. Se o nome for diferente, altere o `src` da tag `<img>` em `index.html`.
3. O enquadramento é vertical (4:5) com cantos arredondados. Para reposicionar a
   imagem dentro do quadro, ajuste `object-position` da regra
   `.photo-frame img` em `style.css` (padrão atual: `50% 22%`).

Se a foto ainda não estiver disponível, o site continua funcionando: a imagem
exibe o espaço reservado e um monograma “LS” no lugar.

## Trocar de idioma

O seletor **PT | EN** está no cabeçalho e no rodapé. As traduções ficam em
`script.js`, no objeto `TRANSLATIONS`, com os blocos `pt` e `en`. Para editar um
texto, troque a chave correspondente (por exemplo `hero.text`). Para adicionar
um terceiro idioma, crie um novo bloco com as mesmas chaves.

O idioma é salvo em `localStorage` (chave `ls-portfolio-lang`), continua ativo
ao recarregar a página e atualiza o atributo `lang` do HTML, o título, a
metadescrição e as tags de compartilhamento.

## Seções do site

Início (hero) · Sobre mim · Tecnologias e competências · Experiência
profissional · Contato.

A seção de projetos foi removida. Quando houver trabalho real para publicar,
ela pode ser recriada como um novo `<section>` entre “Competências” e
“Experiência”, com um link `#projetos` no menu e um cartão `.skill-card`
reaproveitado como base visual.

## Ajustar as cores

Toda a paleta está no bloco `:root` do `style.css`. Para trocar o tom
principal, edite estas variáveis:

```css
--accent: #4f46e5;      /* índigo — cor principal */
--violet: #7c3aed;      /* violeta — highlights */
--teal:   #0d9488;      /* teal — categorias e experiência */
--amber:  #d97706;      /* âmbar — áreas de interesse */
--grad-hero: linear-gradient(135deg, #4f46e5 0%, #7c3aed 52%, #0d9488 100%);
```

As variáveis `--*-ink` são os tons escuros usados nos textos pequenos
(etiquetas), escolhidos para manter o contraste mínimo AA (4.5:1) sobre fundo
claro. Se mudar as cores principais, ajuste também os tons escuros.

## Contato

A seção de contato tem dois botões diretos: **“Chamar no WhatsApp”** e
**“Enviar e-mail”**. Abaixo deles ficam dois botões circulares com apenas os
ícones do LinkedIn e do GitHub, que abrem os perfis em uma nova aba.

Os links reais ficam no `index.html` (`mailto:`, `wa.me`, LinkedIn e GitHub) e
no rodapé aparecem apenas e-mail e WhatsApp. Para trocar um endereço ou número,
atualize os links correspondentes no `index.html` e no rodapé.

## Formulário de contato

O site usa apenas canais reais (e-mail, LinkedIn, GitHub e WhatsApp), sem
simular envios. Para acrescentar um formulário, integre um serviço real
(Formspree, Web3Forms, Google Apps Script, etc.) e ajuste o `<form>` na seção
`#contato`, adicionando o `action` correspondente — nunca deixe o formulário
com aparência de funcionar sem backend.

## Acessibilidade e desempenho

- HTML semântico com hierarquia de títulos (`h1` → `h2` → `h3`).
- Link “Pular para o conteúdo”, foco visível e navegação por teclado.
- Menu mobile com `aria-expanded`, fechamento por `Esc` e por clique no link.
- `prefers-reduced-motion` desativa transições e animações.
- Sem rolagem horizontal em nenhuma resolução (layout mobile-first).
- Alvos de toque com pelo menos 44 px no menu e nos botões principais.
- Áreas seguras (`safe-area-inset`) respeitadas em celulares com notch.
