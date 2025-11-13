# 📸 Guia Completo: Como Substituir Fotos/Assets no Seu Site

## 🎯 Visão Geral

Atualmente, seu site usa imports do Figma como:
```tsx
import img1 from "figma:asset/9d69b3a74b757f29e98f418c38f8e38f17dbf040.png";
```

Você pode substituir essas imagens de **2 formas**:
1. **Hospedar online** (Recomendado - mais fácil e sempre acessível)
2. **Usar arquivos locais** (Limitado ao ambiente Figma Make)

---

## 🌐 OPÇÃO 1: Hospedar Imagens Online (RECOMENDADO)

### ✅ Vantagens
- ✓ Funciona em qualquer lugar que você publicar o site
- ✓ Não precisa fazer upload toda vez
- ✓ URLs permanentes
- ✓ Melhor performance

### 📋 Passo a Passo Completo

#### **Etapa 1: Preparar suas Imagens**

1. **Organize suas fotos** em uma pasta no seu computador
2. **Renomeie** com nomes descritivos:
   ```
   hero-video.mp4
   about-profile.jpg
   gallery-photo-1.jpg
   gallery-photo-2.jpg
   rates-background.jpg
   etc.
   ```

3. **Otimize o tamanho** (importante para velocidade):
   - **Fotos de fundo/hero**: máximo 1920x1080px
   - **Galeria**: 800-1200px de largura
   - **Avatares/pequenas**: 400-600px
   - Use ferramentas como:
     - [TinyPNG](https://tinypng.com/) - comprimir sem perder qualidade
     - [Squoosh](https://squoosh.app/) - compressor online gratuito
     - Photoshop/GIMP - "Save for Web"

---

#### **Etapa 2: Escolher Serviço de Hospedagem**

### 🏆 **OPÇÃO A: Imgur (Mais Fácil - RECOMENDADO para iniciantes)**

**Por que usar:**
- ✓ 100% gratuito
- ✓ Sem necessidade de login (mas recomendado)
- ✓ Upload super rápido
- ✓ URLs permanentes
- ✓ Aceita fotos e GIFs

**Como usar:**

1. Acesse: [https://imgur.com/upload](https://imgur.com/upload)

2. **Sem fazer login:**
   - Arraste suas fotos ou clique em "Browse"
   - Aguarde o upload
   - Clique na foto enviada
   - Clique com botão direito > "Copy Image Address" (Copiar endereço da imagem)
   - ✓ Pronto! Use essa URL no código

3. **Com conta (RECOMENDADO):**
   - Crie conta gratuita
   - Crie um álbum "Malily Website Assets"
   - Faça upload de todas as fotos
   - Organize em álbuns (Hero, Gallery, Backgrounds, etc.)
   - **Vantagem:** Pode editar, reorganizar e gerenciar depois

**Exemplo de URL do Imgur:**
```
https://i.imgur.com/ABC1234.jpg
```

---

### 🏆 **OPÇÃO B: GitHub (Melhor para Desenvolvedores)**

**Por que usar:**
- ✓ 100% gratuito
- ✓ Controle total e versionamento
- ✓ URLs permanentes e confiáveis
- ✓ Backup automático

**Como usar:**

1. **Criar conta GitHub:**
   - Acesse: [https://github.com/signup](https://github.com/signup)
   - Crie uma conta gratuita

2. **Criar repositório para assets:**
   - Clique em "New repository" (botão verde)
   - Nome: `malily-website-assets`
   - Selecione "Public"
   - Marque "Add a README file"
   - Clique "Create repository"

3. **Upload das imagens:**
   - No repositório, clique em "Add file" > "Upload files"
   - Arraste todas as suas fotos
   - Escreva uma mensagem: "Add website images"
   - Clique "Commit changes"

4. **Obter URLs:**
   - Clique na imagem que você enviou
   - Clique em "Download" (ou botão direito > Copy image address)
   - A URL será algo como:
   ```
   https://raw.githubusercontent.com/seu-usuario/malily-website-assets/main/hero-video-thumb.jpg
   ```

**Estrutura recomendada no GitHub:**
```
malily-website-assets/
├── hero/
│   ├── hero-video.mp4
│   └── hero-thumbnail.jpg
├── about/
│   └── profile-photo.jpg
├── gallery/
│   ├── photo-1.jpg
│   ├── photo-2.jpg
│   └── video-1.mp4
├── backgrounds/
│   ├── rates-bg.jpg
│   └── booking-bg.jpg
└── README.md
```

---

### 🏆 **OPÇÃO C: Cloudinary (Profissional - Para muitas imagens)**

**Por que usar:**
- ✓ Otimização automática de imagens
- ✓ Responsivo automático
- ✓ CDN global (super rápido)
- ✓ Plano gratuito generoso (25 GB)

**Como usar:**

1. **Criar conta:**
   - Acesse: [https://cloudinary.com/users/register/free](https://cloudinary.com/users/register/free)
   - Preencha o formulário (gratuito)

2. **Upload de imagens:**
   - No dashboard, clique "Media Library"
   - Arraste suas fotos
   - Organize em pastas

3. **Obter URLs:**
   - Clique na imagem
   - Copie a "Image URL"
   - Exemplo:
   ```
   https://res.cloudinary.com/seu-cloud-name/image/upload/v1234567890/hero-photo.jpg
   ```

---

#### **Etapa 3: Substituir no Código**

Depois de hospedar as imagens, você precisa atualizar os arquivos `.tsx`:

### 📝 **Exemplo Prático - HomePage.tsx**

**ANTES:**
```tsx
import img3 from "figma:asset/416b6f3cdbd6e560cbe3c38b5eeb87150c24cae9.png";

// Depois no código:
<img src={img3} alt="..." />
```

**DEPOIS (com URL hospedada):**
```tsx
// Remova a linha de import e use URL direto:
<img 
  src="https://i.imgur.com/ABC1234.jpg" 
  alt="Hero background"
/>
```

**OU (definir constante no topo):**
```tsx
// No topo do arquivo, depois dos outros imports:
const HERO_IMAGE = "https://i.imgur.com/ABC1234.jpg";
const PROFILE_PHOTO = "https://i.imgur.com/XYZ5678.jpg";

// Depois no código:
<img src={HERO_IMAGE} alt="Hero background" />
```

---

### 📂 **Onde Estão as Imagens Atualmente no Código**

Aqui estão os arquivos que usam imagens e precisam ser atualizados:

#### **1. HomePage.tsx**
```tsx
import img3 from "figma:asset/416b6f3cdbd6e560cbe3c38b5eeb87150c24cae9.png";
```
- **Uso:** Background do hero
- **Tipo:** Foto de fundo
- **Recomendação:** 1920x1080px, landscape

---

#### **2. AboutPage.tsx**
```tsx
import img2 from "figma:asset/21e3dc10029d0f875e3c1bd862b8b6f1a98f0b22.png";
```
- **Uso:** Foto de perfil na seção About
- **Tipo:** Foto vertical principal
- **Recomendação:** 800x1200px, portrait

---

#### **3. RatesPage.tsx**
```tsx
import img1 from "figma:asset/9d69b3a74b757f29e98f418c38f8e38f17dbf040.png";
```
- **Uso:** Background lateral na página Rates
- **Tipo:** Foto de fundo vertical
- **Recomendação:** 1080x1920px, portrait

---

#### **4. WishListPage.tsx**
```tsx
import img3 from "figma:asset/416b6f3cdbd6e560cbe3c38b5eeb87150c24cae9.png";
```
- **Uso:** Background blur na página Wish List
- **Tipo:** Foto de fundo
- **Recomendação:** 1920x1080px

---

#### **5. GalleryPage.tsx**
```tsx
// Múltiplas imagens e vídeos na galeria
const galleryItems = [
  { id: 1, type: "image", src: "https://seu-link.com/foto1.jpg", ... },
  { id: 2, type: "video", src: "https://seu-link.com/video1.mp4", ... },
  // etc...
]
```
- **Uso:** Grid de galeria
- **Tipo:** Mix de fotos e vídeos
- **Recomendação:** 800-1200px, mix portrait/landscape

---

#### **6. BlogPage.tsx**
```tsx
// Imagens dos posts do blog
posts: [
  {
    image: "https://seu-link.com/blog-post-1.jpg",
    // ...
  }
]
```
- **Uso:** Thumbnails dos posts
- **Tipo:** Fotos de capa
- **Recomendação:** 1200x630px, landscape

---

### 🎬 **Para Vídeos**

**Vídeos de fundo/hero:**

1. **Upload no YouTube (privado ou não listado):**
   - Faça upload no YouTube
   - Configure como "Não listado" ou "Privado"
   - Use a URL do vídeo

2. **Vimeo (recomendado para vídeos profissionais):**
   - Upload gratuito
   - Melhor qualidade
   - Controles de privacidade

3. **Cloudinary ou Imgur (vídeos curtos):**
   - Bom para GIFs e vídeos curtos (até 1 min)

---

## 💡 Exemplo Completo de Substituição

### **ANTES - HomePage.tsx:**
```tsx
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import img3 from "figma:asset/416b6f3cdbd6e560cbe3c38b5eeb87150c24cae9.png";

export function HomePage() {
  return (
    <div 
      className="relative h-screen"
      style={{
        backgroundImage: `url(${img3})`,
      }}
    >
      {/* ... resto do código */}
    </div>
  );
}
```

### **DEPOIS - HomePage.tsx (com Imgur):**
```tsx
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

// URLs das suas imagens hospedadas
const HERO_BG = "https://i.imgur.com/ABC1234.jpg";

export function HomePage() {
  return (
    <div 
      className="relative h-screen"
      style={{
        backgroundImage: `url(${HERO_BG})`,
      }}
    >
      {/* ... resto do código */}
    </div>
  );
}
```

---

## 📋 Checklist de Substituição

Use este checklist para não esquecer nenhuma imagem:

- [ ] **HomePage.tsx** - Hero background (img3)
- [ ] **AboutPage.tsx** - Profile photo (img2)
- [ ] **RatesPage.tsx** - Rates background (img1)
- [ ] **WishListPage.tsx** - Wish List background (img3)
- [ ] **GalleryPage.tsx** - Todas as fotos da galeria (array completo)
- [ ] **BlogPage.tsx** - Thumbnails dos posts
- [ ] **VIPAccessPage.tsx** - Verificar se tem imagens
- [ ] **Vídeos** - Hero video, gallery videos

---

## 🎨 Melhores Práticas

### **Tamanhos Recomendados:**

| Tipo | Dimensões | Formato | Peso Máx |
|------|-----------|---------|----------|
| Hero Background | 1920x1080px | JPG | 500KB |
| Profile Photo | 800x1200px | JPG | 300KB |
| Gallery Photo | 1000x1500px | JPG | 400KB |
| Thumbnail | 600x400px | JPG | 150KB |
| Video Background | 1920x1080px | MP4 | 5MB |

### **Formatos:**
- **JPG** - Fotos com muitas cores
- **PNG** - Imagens com transparência (logos)
- **WebP** - Melhor compressão (moderno)
- **MP4** - Vídeos (H.264 codec)

### **Nomes de Arquivo:**
- ✓ Use nomes descritivos: `hero-background.jpg`
- ✓ Sem espaços: `profile-photo.jpg` (não `profile photo.jpg`)
- ✓ Minúsculas: `gallery-1.jpg`
- ✗ Evite caracteres especiais

---

## 🚀 Próximos Passos

1. **Escolha um serviço de hospedagem** (recomendo Imgur para começar)
2. **Prepare suas fotos** (otimize e renomeie)
3. **Faça upload** de todas as imagens
4. **Copie as URLs** de cada imagem
5. **Atualize os arquivos .tsx** substituindo os imports
6. **Teste no site** para garantir que tudo carregou

---

## ❓ Dúvidas Comuns

**P: As imagens vão ficar lentas?**
R: Não, se você otimizar antes (use TinyPNG). Serviços como Imgur e Cloudinary têm CDN rápido.

**P: Posso trocar as imagens depois?**
R: Sim! Se usar Imgur com conta, pode editar. No GitHub, só fazer novo commit.

**P: E se eu quiser remover uma imagem do Imgur?**
R: Com conta, você pode deletar. Sem conta, a imagem fica permanente (mas você pode trocar a URL no código).

**P: Preciso pagar algo?**
R: Não! Imgur, GitHub e Cloudinary (plano free) são 100% gratuitos para uso pessoal.

**P: Quantas imagens posso hospedar?**
R: Imgur - ilimitado | GitHub - 100GB total | Cloudinary - 25GB no plano gratuito

---

## 💬 Precisa de Ajuda?

Se tiver dúvidas durante o processo, me avise qual etapa está travada que eu ajudo! 🚀

---

**Criado para o projeto Malily Website**  
*Última atualização: Novembro 2025*
