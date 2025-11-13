# Sistema de Acesso VIP - Guia de Uso

## 📋 Visão Geral

O sistema de acesso VIP permite que você proteja conteúdo exclusivo na galeria, liberando acesso apenas para assinantes VIP do OnlyFans através de códigos de acesso.

## 🔑 Como Funciona

### Para Assinantes VIP:
1. **Assinar o VIP OnlyFans** (opções: 30 dias, 3 meses ou 6 meses)
2. **Solicitar código de acesso via DM** no OnlyFans (não é automático!)
3. **Aguardar até 5 dias úteis** para receber o código via DM
4. Ao clicar em conteúdo "VIP Members Only" na galeria, são redirecionados para a página de acesso VIP
5. Inserem o código de acesso que receberam
6. Após validação, têm acesso completo ao conteúdo VIP durante toda a duração da sua assinatura OnlyFans
7. Se cancelar e renovar a assinatura, deve solicitar um novo código

### Para Você (Administrador):
1. Acesse a página de administração em: `/vip-admin` (adicione `#vip-admin` na URL ou navegue manualmente)
2. Faça login com a senha de administrador
3. Visualize o código atual ou gere novos códigos
4. Quando receber solicitação via DM, compartilhe o código com o assinante VIP
5. Processe solicitações dentro de até 5 dias úteis

## 🎯 Acesso Rápido

### Página de Acesso VIP (Para Assinantes)
- URL: Navegue para "Gallery" e clique em "Enter Access Code"
- Ou adicione `#vip-access` à URL

### Painel de Administração
- URL: Adicione `#vip-admin` à URL ou digite `vip-admin` no campo de navegação
- Senha de Admin: `Malily2025Admin!`

## 🔐 Códigos de Acesso

### Código Atual Ativo:
```
MALILY2025
```

### Como Gerar Novos Códigos:
1. Acesse o painel de administração
2. Clique em "Generate Random Code"
3. Copie o código gerado
4. Compartilhe com seus assinantes VIP via OnlyFans DM

### Boas Práticas:
- Responda solicitações de código dentro de 5 dias úteis
- Compartilhe códigos apenas via DM privado no OnlyFans
- Mantenha um registro dos códigos ativos e para quem foram enviados
- Considere gerar códigos únicos para diferentes durações de assinatura (30 dias, 3 meses, 6 meses)
- Gere novos códigos periodicamente para manter exclusividade

## ⚙️ Configurações Técnicas

### Duração do Acesso:
- **Recomendado:** Configurar de acordo com a duração da assinatura OnlyFans do usuário
  - 30 dias (1 mês)
  - 90 dias (3 meses) 
  - 180 dias (6 meses)
- **Local:** `/components/VIPAccessPage.tsx` - linha 39

Para alterar a duração padrão, modifique esta linha:
```typescript
localStorage.setItem("vipAccessExpiry", String(Date.now() + 30 * 24 * 60 * 60 * 1000)); // 30 dias
// Para 3 meses: 90 * 24 * 60 * 60 * 1000
// Para 6 meses: 180 * 24 * 60 * 60 * 1000
```

**Importante:** A duração do código deve corresponder à duração da assinatura OnlyFans do usuário.

### Senha de Administrador:
- **Padrão:** `Malily2025Admin!`
- **Local:** `/components/VIPAdminPage.tsx` - linha 19

Para alterar a senha, modifique esta linha:
```typescript
const ADMIN_PASSWORD = "SuaNovaSenha123!";
```

### Código de Acesso Ativo:
- **Padrão:** `MALILY2025`
- **Local:** `/components/VIPAccessPage.tsx` - linha 22

Para alterar o código principal, modifique esta linha:
```typescript
const DEMO_VIP_CODE = "SEUNOVOCODIGO";
```

## 🖼️ Gerenciamento de Conteúdo VIP

### Como Marcar Conteúdo como VIP:
No arquivo `/components/GalleryPage.tsx`, defina `locked: true` nos itens que deseja proteger:

```typescript
{
  id: 10,
  type: "image",
  src: imagemVIP,
  thumbnail: imagemVIP,
  locked: true, // ← Define como conteúdo VIP
  title: "Exclusive VIP Content",
}
```

### Liberar Conteúdo:
Altere `locked: false` para tornar o conteúdo público.

## 🛠️ Recursos do Sistema

### Página de Acesso VIP:
- ✅ Formulário de validação de código
- ✅ Link direto para subscrição OnlyFans VIP
- ✅ Mensagens de erro claras
- ✅ Confirmação visual de acesso concedido
- ✅ Armazenamento local seguro
- ✅ Informações claras sobre processo de ativação (não automático)
- ✅ Prazo de processamento (até 5 dias úteis)
- ✅ Detalhes sobre duração e renovação

### Painel de Administração:
- ✅ Autenticação de administrador
- ✅ Visualização do código ativo
- ✅ Gerador de códigos aleatórios
- ✅ Copiar códigos com um clique
- ✅ Ação rápida para limpar acesso
- ✅ Instruções de uso

### Galeria:
- ✅ Overlay visual em conteúdo bloqueado
- ✅ Detecção automática de acesso VIP
- ✅ Redirecionamento inteligente
- ✅ Seção informativa (oculta para VIPs)

## 📱 Fluxo de Usuário

### Novo Assinante VIP:
1. Assina o VIP OnlyFans (escolhe: 30 dias, 3 meses ou 6 meses)
2. **Solicita código de acesso via DM no OnlyFans**
3. **Aguarda até 5 dias úteis** para receber o código
4. Recebe código de acesso via DM no OnlyFans
5. Visita a galeria do site
6. Clica em conteúdo VIP
7. Insere código na página de acesso
8. Acesso liberado pela duração da assinatura

### Assinante com Acesso Ativo:
1. Visita a galeria
2. Vê todo o conteúdo desbloqueado
3. Não vê prompts de assinatura

### Após Término da Assinatura:
1. Acesso expira automaticamente
2. Se renovar assinatura, deve **solicitar novo código via DM**
3. Sistema limpa dados expirados

## 🔄 Manutenção

### Quando Receber Solicitação de Código:
- [ ] Verificar se a pessoa é assinante VIP ativo no OnlyFans
- [ ] Verificar a duração da assinatura (30 dias, 3 meses ou 6 meses)
- [ ] Enviar o código apropriado via DM (dentro de 5 dias úteis)
- [ ] Manter registro da solicitação

### Periódica:
- [ ] Gerar novos códigos para diferentes durações se necessário
- [ ] Verificar funcionamento do sistema
- [ ] Revisar solicitações pendentes

### Conforme Necessário:
- [ ] Atualizar senha de administrador
- [ ] Adicionar/remover conteúdo VIP
- [ ] Ajustar duração do acesso para diferentes planos

## ⚠️ Importante

- **Processo Manual:** O acesso NÃO é automático - você deve processar cada solicitação manualmente
- **Prazo de Resposta:** Até 5 dias úteis para responder solicitações
- **Duração do Código:** Deve corresponder à duração da assinatura OnlyFans (30d, 3m ou 6m)
- **Renovação:** Assinantes que cancelarem e renovarem precisam solicitar novo código
- **Armazenamento:** Os códigos são armazenados localmente no navegador do usuário
- **Limpeza de Dados:** Limpar dados do navegador remove o acesso
- **Rastreamento:** O sistema não rastreia automaticamente quem usou qual código
- **Backend:** Para rastreamento completo e automação, seria necessário um backend

## 💡 Sugestões de Uso

1. **Códigos por Duração:** Crie códigos diferentes para cada duração de assinatura
   - `MALILY30` para assinaturas de 30 dias
   - `MALILY90` para assinaturas de 3 meses
   - `MALILY180` para assinaturas de 6 meses

2. **Registro Manual:** Mantenha uma planilha ou documento com:
   - Username do assinante
   - Data da solicitação
   - Código enviado
   - Duração da assinatura
   - Data de expiração

3. **Resposta Padrão:** Crie uma mensagem padrão para DMs:
   ```
   Olá! Obrigada pela sua assinatura VIP. 
   Aqui está seu código de acesso exclusivo para a galeria VIP do site: [CÓDIGO]
   
   Validade: [30 dias / 3 meses / 6 meses]
   
   Se cancelar e renovar sua assinatura, solicite um novo código.
   ```

4. **Códigos Promocionais:** Crie códigos temporários para campanhas especiais

## 🚀 Próximos Passos (Opcional)

Para um sistema mais robusto, você pode considerar no futuro:
- Backend com banco de dados para rastreamento
- Sistema de códigos únicos por usuário
- Analytics de acesso
- Notificações de expiração
- Integração direta com API do OnlyFans (se disponível)

---

**Nota de Segurança:** Este é um sistema básico de proteção de conteúdo adequado para um site estático. Para segurança máxima com dados sensíveis, recomenda-se implementar um backend completo.
