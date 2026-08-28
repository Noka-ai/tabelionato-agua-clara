# Tabelionato Água Clara — site institucional

Site estático (HTML5 + Tailwind CSS + JavaScript modular), pronto para deploy na Vercel.

## Estrutura

```
.
├── index.html            Página única com as seções e as páginas internas de serviço
├── css/
│   ├── styles.css        Camada de componentes do site (cards, hero, FAQ, formulário)
│   └── tailwind.css      Gerado pelo build do Tailwind (não editar à mão)
├── src/
│   └── tailwind.css      Entrada do Tailwind (@tailwind base/components/utilities)
├── js/
│   └── main.js           Navegação, páginas de serviço, FAQ, formulário e WhatsApp
├── assets/
│   └── logo.png          Logotipo da serventia
├── tailwind.config.js    Tokens do projeto (cores, tipografia, sombras)
├── vercel.json           Build, cabeçalhos de segurança e cache
├── robots.txt
├── sitemap.xml
└── package.json
```

## Rodar localmente

```bash
npm install
npm run dev        # recompila o Tailwind em modo watch
```

Abra `index.html` no navegador (ou use qualquer servidor estático, ex.: `npx serve .`).

## Build de produção

```bash
npm run build      # gera css/tailwind.css minificado
```

## Deploy na Vercel

**Opção A — via Git**
1. Suba esta pasta em um repositório (GitHub, GitLab ou Bitbucket).
2. Na Vercel: *Add New → Project* e selecione o repositório.
3. Framework Preset: **Other**. Build Command e Output Directory já vêm do `vercel.json`.
4. Deploy.

**Opção B — via CLI**
```bash
npm i -g vercel
vercel
vercel --prod
```

Depois de publicar, aponte o domínio próprio em *Settings → Domains*.

## O que revisar antes de publicar

- `robots.txt` e `sitemap.xml`: trocar `SEU-DOMINIO.com.br` pelo domínio real.
- `index.html`: as tags Open Graph (`og:url`, `og:image`) apontando para o domínio real.
- O e-mail do DPO (`dpo@tabelionatoaguaclara.com.br`) precisa existir, ou substitua pelo e-mail oficial.
- O formulário de triagem não usa backend: ele monta a mensagem e abre o WhatsApp oficial. Nenhum dado é armazenado — o que atende ao princípio de coleta mínima da LGPD. Para receber por e-mail, será preciso adicionar uma função serverless ou um serviço de formulário.

## Dados oficiais no site

- Serviço Notarial e Tabelionato de Protesto de Títulos e Outros Documentos de Dívida
- Comarca de Água Clara — MS
- Rua Roaldo Ferreira Lino, nº 27, Jardim Nova Água Clara, Água Clara — MS, CEP 79680-033
- Telefone fixo: (67) 3239-2938 · WhatsApp: (67) 99681-3014
- tabelionatoaguaclara@outlook.com.br
- Segunda a sexta, 08:00–11:00 e 13:00–17:00. Sábados e domingos: fechado.
