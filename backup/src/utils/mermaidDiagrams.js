import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
});

export function renderMermaidDiagrams() {
  mermaid.contentLoaded();
}

