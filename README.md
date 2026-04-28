# 🔩 Ferro Forte Serralheria — Landing Page Premium

Landing page de alta conversão desenvolvida em **Next.js 15 + Tailwind CSS**  
para o nicho de serralheria local, otimizada para SEO, performance e conversão.

---

## 🚀 Como Rodar

### Pré-requisitos
- Node.js ≥ 18
- pnpm instalado globalmente

### Instalação

```bash
# Instalar pnpm globalmente (se não tiver)
npm install -g pnpm

# Entrar na pasta do projeto
cd serralheiro-lp

# Instalar dependências
pnpm install

# Copiar variáveis de ambiente
cp .env.example .env.local

# Rodar em desenvolvimento
pnpm dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

### Build de Produção

```bash
pnpm build
pnpm start
```

---

## 🏗️ Estrutura do Projeto

```
serralheiro-lp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout com fonts, SEO, JSON-LD
│   │   ├── page.tsx            # Página principal
│   │   └── globals.css         # Estilos globais + animações
│   ├── components/
│   │   └── sections/
│   │       ├── Header.tsx      # Navbar sticky + botão WhatsApp
│   │       ├── Hero.tsx        # Hero com partículas animadas
│   │       ├── About.tsx       # Seção sobre com história
│   │       ├── Services.tsx    # Cards de serviços
│   │       ├── Portfolio.tsx   # Galeria Masonry com lightbox
│   │       ├── CTA.tsx         # Formulário + CTA forte
│   │       ├── Contact.tsx     # Contatos + mapa Google
│   │       └── Footer.tsx      # Footer completo
│   ├── hooks/
│   │   └── useInView.ts        # Hook para animações on scroll
│   └── lib/
│       └── utils.ts            # Utilitários + constantes
├── public/
│   └── images/                 # Imagens estáticas
├── next.config.ts              # Config: imagens, segurança, cache
├── tailwind.config.ts          # Tema customizado industrial
├── .env.example                # Exemplo de variáveis
└── package.json
```

---

## ✨ Funcionalidades

### Performance
- ✅ Next.js 15 com Turbopack (dev ultra-rápido)
- ✅ Imagens em formato **AVIF/WebP** automático via `next/image`
- ✅ Fonts carregadas localmente via `next/font/google` (zero FOUT)
- ✅ **Cache agressivo** para assets estáticos (1 ano) e imagens (30 dias)
- ✅ Bundle splitting automático
- ✅ CSS otimizado em produção

### SEO
- ✅ **Meta tags** completas (title, description, robots, canonical)
- ✅ **Open Graph** e **Twitter Card** para compartilhamento social
- ✅ **JSON-LD Schema** `LocalBusiness` para SEO local
- ✅ **Sitemap** configurável
- ✅ **Viewport** e tema mobile configurados

### Segurança
- ✅ Headers de segurança: `X-Frame-Options`, `X-XSS-Protection`, `HSTS`, `CSP` base
- ✅ `poweredByHeader: false` (não expõe tecnologia)
- ✅ Formulário com validação **Zod** (client-side)
- ✅ `referrerPolicy` configurado
- ✅ Links externos com `rel="noopener noreferrer"`

### UX / Design
- ✅ **Header sticky** com transição suave
- ✅ **Partículas de faísca** animadas no Hero (Canvas API)
- ✅ **Contadores animados** de estatísticas (Intersection Observer)
- ✅ **Galeria Masonry** com filtro por categoria e lightbox
- ✅ **Formulário WhatsApp** — abre conversa pré-preenchida
- ✅ **Botão flutuante** WhatsApp com animação pulse
- ✅ **Animações on-scroll** via Intersection Observer hook
- ✅ Totalmente **responsivo** (mobile-first)
- ✅ Scrollbar customizada
- ✅ Mapa Google embutido com estilo grayscale

---

## 🎨 Personalização

### Dados do Cliente
Edite `src/lib/utils.ts`:

```ts
export const WHATSAPP_NUMBER = "5511999999999"; // número sem +
export const INSTAGRAM_URL = "https://instagram.com/seu_perfil";
export const EMAIL = "seu@email.com.br";
```

### Metadados SEO
Edite `src/app/layout.tsx` — o objeto `metadata` e `jsonLd`.

### Textos e Imagens
- **Hero:** `src/components/sections/Hero.tsx`
- **Sobre:** `src/components/sections/About.tsx`
- **Portfólio:** array `portfolioItems` em `src/components/sections/Portfolio.tsx`
- **Serviços:** array `services` em `src/components/sections/Services.tsx`

### Cores
Edite `tailwind.config.ts` — `forge` é o laranja principal, `steel` são os tons neutros.

---

## 📦 Deploy Recomendado

### Vercel (zero config)
```bash
npx vercel
```

### Domínio personalizado
1. Apontar DNS para Vercel
2. Configurar `NEXT_PUBLIC_SITE_URL` no painel da Vercel
3. Ativar HTTPS automático

---

## 📊 Checklist Pós-Deploy

- [ ] Substituir imagens do Unsplash por fotos reais do cliente
- [ ] Atualizar número de WhatsApp real
- [ ] Configurar e-mail real
- [ ] Atualizar endereço no mapa (embed do Google Maps)
- [ ] Configurar Google Search Console
- [ ] Ativar Google Analytics (opcional)
- [ ] Verificar Open Graph com [og debugger](https://developers.facebook.com/tools/debug/)
- [ ] Testar PageSpeed Insights

---

## 🛠️ Tecnologias

| Tech | Versão | Uso |
|------|--------|-----|
| Next.js | 15.x | Framework principal |
| React | 19.x | UI |
| TypeScript | 5.x | Tipagem |
| Tailwind CSS | 3.x | Estilização |
| Framer Motion | 12.x | Animações avançadas |
| react-hook-form | 7.x | Formulário |
| Zod | 3.x | Validação |
| Sharp | 0.34 | Otimização de imagens |
| Lucide React | 0.5x | Ícones |
| pnpm | - | Gerenciador de pacotes |

---

Desenvolvido com ♥ e precisão para Ferro Forte Serralheria.
