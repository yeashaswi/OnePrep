import React, { useMemo } from 'react';
import katex from 'katex';

export default function KaTeXMath({ math, display = false, className = '' }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: display,
        throwOnError: false,
        strict: false,
      });
    } catch (e) {
      console.error('KaTeX error:', e);
      return math;
    }
  }, [math, display]);

  return (
    <span
      className={`katex-wrapper ${display ? 'block text-center my-3' : 'inline-block'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Helper to render mixed text with LaTeX expressions like $x^2 + y^2$ and $$ \int f(x)dx $$
export function FormattedText({ text, className = '' }) {
  if (!text) return null;

  // Split by $$ for display blocks, then by $ for inline math
  const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g);

  return (
    <div className={`prose-content leading-relaxed ${className}`}>
      {parts.map((part, idx) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const rawMath = part.slice(2, -2);
          return <KaTeXMath key={idx} math={rawMath} display={true} />;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          const rawMath = part.slice(1, -1);
          return <KaTeXMath key={idx} math={rawMath} display={false} />;
        }
        return <span key={idx} dangerouslySetInnerHTML={{ __html: part }} />;
      })}
    </div>
  );
}
