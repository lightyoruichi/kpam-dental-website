import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export function applySyntaxHighlighting() {
  // Ensure Prism highlights loaded elements
  Prism.highlightAll();
}

