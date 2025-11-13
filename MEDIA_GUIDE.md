# Guia de Mídia - Malily Website

## Como Adicionar Fotos e Vídeos/GIFs ao Site

### 📸 GALERIA (GalleryPage.tsx)

#### Para adicionar vídeos curtos (máx 10 segundos) ou GIFs:

1. **Abra o arquivo:** `/components/GalleryPage.tsx`

2. **Localize o array `galleryItems`** (começando na linha ~25)

3. **Para cada item da galeria, adicione a URL do vídeo/GIF no campo `videoSrc`:**

```typescript
{
  id: 1,
  type: "image",
  src: image1,
  videoSrc: "https://seusite.com/video1.mp4", // ← ADICIONE AQUI
  thumbnail: image1,
  locked: false,
  title: "Cinematic Shadows",
}
```

#### Formatos suportados:
- **GIF:** `.gif` - Animações que tocam automaticamente
- **Vídeo:** `.mp4`, `.webm` - Vídeos com controles (play/pause)

#### Comportamento:
- **Miniatura:** Mostra a imagem estática (thumbnail)
- **Ao clicar:** Abre o modal com o vídeo/GIF em tela cheia
- **Se videoSrc estiver vazio:** Mostra apenas a imagem estática

---

### 🖼️ ABOUT PAGE - More Moments (AboutPage.tsx)

#### Para adicionar imagens na seção "More Moments":

1. **Abra o arquivo:** `/components/AboutPage.tsx`

2. **Localize o array `footerImages`** (linha ~37)

3. **Adicione ou substitua URLs das imagens:**

```typescript
const footerImages = [
  "https://seusite.com/imagem1.jpg",
  "https://seusite.com/imagem2.jpg",
  // ... adicione até 8 imagens
];
```

#### Comportamento:
- Imagens aparecem cortadas (cropped) para criar curiosidade
- Ao passar o mouse: gradiente vermelho aparece
- Ao clicar: abre imagem completa no lightbox

---

### 🎨 ABOUT PAGE - Gallery Highlights (Carrossel)

1. **Abra o arquivo:** `/components/AboutPage.tsx`

2. **Localize o array `carouselImages`** (linha ~17)

3. **Adicione URLs das imagens:**

```typescript
const carouselImages = [
  "https://seusite.com/highlight1.jpg",
  "https://seusite.com/highlight2.jpg",
  // ... até 12 imagens
];
```

---

## 🎬 Como Hospedar Vídeos/GIFs

### Opção 1: Serviços de Hospedagem Gratuitos
- **Imgur:** Para GIFs (até 200MB)
  - Upload em: https://imgur.com
  - Copie o link direto (termina em `.gif`)

- **Streamable:** Para vídeos curtos
  - Upload em: https://streamable.com
  - Use o link de embed ou direto

### Opção 2: Cloud Storage
- **Google Drive/Dropbox:**
  - Faça upload do arquivo
  - Gere link público de compartilhamento
  - Use ferramentas para converter em link direto

### Opção 3: Próprio Servidor/Hosting
- Faça upload dos arquivos para seu servidor web
- Use o caminho completo: `https://seudominio.com/videos/video1.mp4`

---

## 📝 Exemplos Práticos

### Exemplo 1: Adicionar GIF na Galeria
```typescript
{
  id: 1,
  type: "image",
  src: image1,
  videoSrc: "https://i.imgur.com/exemplo123.gif",
  thumbnail: image1,
  locked: false,
  title: "Elegant Movement",
}
```

### Exemplo 2: Adicionar Vídeo MP4 na Galeria
```typescript
{
  id: 2,
  type: "video",
  src: image2,
  videoSrc: "https://seusite.com/videos/teaser.mp4",
  thumbnail: image2,
  locked: false,
  title: "Exclusive Preview",
}
```

### Exemplo 3: Conteúdo Bloqueado (VIP)
```typescript
{
  id: 4,
  type: "video",
  src: "",
  videoSrc: "", // Deixe vazio para conteúdo bloqueado
  thumbnail: image1,
  locked: true, // ← Define como bloqueado
  title: "VIP Exclusive",
}
```

---

## ⚙️ Especificações Técnicas

### Tamanho Recomendado dos Arquivos:
- **Imagens:** Máx 2MB (formato JPEG/PNG otimizado)
- **GIFs:** Máx 5MB (use ferramentas de compressão se necessário)
- **Vídeos:** Máx 10MB para 10 segundos (formato MP4, codec H.264)

### Dimensões Recomendadas:
- **Galeria Principal:** 1200x1600px (proporção 3:4)
- **More Moments:** 800x600px
- **Carrossel:** 1000x800px

### Ferramentas de Otimização:
- **Imagens:** TinyPNG.com, Squoosh.app
- **GIFs:** Ezgif.com (compressor)
- **Vídeos:** HandBrake, CloudConvert

---

## 🔐 Conteúdo VIP vs Público

### Público (locked: false):
- Aparece normalmente na galeria
- Clicável e visualizável por todos

### VIP (locked: true):
- Mostra ícone de cadeado
- Exibe mensagem "VIP Members Only"
- Não pode ser visualizado até fazer upgrade

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas sobre como adicionar mídia ao site, entre em contato com:
**RA Creative Designer**

---

## ✅ Checklist Antes de Adicionar Mídia

- [ ] Arquivo está otimizado (tamanho adequado)
- [ ] URL está acessível e pública
- [ ] Formato é compatível (.jpg, .png, .gif, .mp4, .webm)
- [ ] Conteúdo está de acordo com os termos de uso
- [ ] Testou o link em um navegador antes de adicionar
- [ ] Definiu corretamente se é público ou VIP (locked)

---

**Última atualização:** Janeiro 2025
