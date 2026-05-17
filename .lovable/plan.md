text
1. Auditoria e Padronização de Design (UI/UX)
   - Extrair tokens de design (cores, espaçamento, sombras) para variáveis HSL no `index.css`.
   - Substituir classes Tailwind arbitrárias por tokens semânticos (ex: `bg-primary` em vez de hexadecimais).
   - Unificar componentes de layout (Containers, Sections) para garantir consistência visual em todas as páginas.

2. Otimização de Ativos e Performance
   - Converter logos de fabricantes de PNG/JPG para WebP ou SVG para reduzir o tempo de carregamento.
   - Implementar Lazy Loading para imagens e componentes pesados (ex: Depoimentos).
   - Adicionar tamanhos fixos (width/height) em imagens para evitar Cumulative Layout Shift (CLS).

3. Refatoração de Arquitetura de Componentes
   - Decompor `Navbar.tsx` e `Footer.tsx` em sub-componentes menores (ex: `NavDropdown`, `SocialLinks`).
   - Criar um componente de Layout global para evitar repetição de `Navbar` e `Footer` em cada página em `App.tsx`.
   - Centralizar dados estáticos (links, lista de fabricantes, contatos) em arquivos de configuração (`src/config/site-data.ts`).

4. Melhorias em Acessibilidade e SEO
   - Adicionar atributos ARIA e garantir contraste adequado em todos os elementos interativos.
   - Configurar `react-helmet-async` para metatags dinâmicas em cada rota (Títulos e descrições únicas).
   - Implementar JSON-LD (Schema.org) para melhorar a indexação da empresa local nos motores de busca.

5. Robustez e Manutenção
   - Implementar tipagem rigorosa de TypeScript em todos os componentes.
   - Adicionar estados de loading e erro (Error Boundaries) para rotas e componentes dinâmicos.
   - Configurar testes básicos de navegação com Vitest para evitar regressões em futuras atualizações.
