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
      className={`katex-wrapper ${display ? 'block text-center my-4 p-2 bg-[#18181A] rounded-lg border border-[#2A2A2E] overflow-x-auto text-[#F4F4F6]' : 'inline-block px-1 text-[#F4F4F6]'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Helper to render mixed text with LaTeX expressions and clean paragraph/line formatting
export function FormattedText({ text, className = '' }) {
  if (!text) return null;

  // Split on double newlines for spacious paragraphs
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className={`space-y-3.5 leading-relaxed text-[#D1D1D6] font-sans ${className}`}>
      {paragraphs.map((para, pIdx) => {
        // Highlight step indicators (e.g. "Step 1:", "Part (a)", "Boxed Answer:")
        const parts = para.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g);

        return (
          <div key={pIdx} className="leading-relaxed text-sm sm:text-[15px]">
            {parts.map((part, idx) => {
              if (part.startsWith('$$') && part.endsWith('$$')) {
                const rawMath = part.slice(2, -2);
                return <KaTeXMath key={idx} math={rawMath} display={true} />;
              } else if (part.startsWith('$') && part.endsWith('$')) {
                const rawMath = part.slice(1, -1);
                return <KaTeXMath key={idx} math={rawMath} display={false} />;
              }

              // Preserve single newlines within paragraph
              const lines = part.split('\n');
              return (
                <span key={idx}>
                  {lines.map((line, lIdx) => {
                    // Check if line is a prominent step or boxed answer
                    const isStep = /^(\s*Step \d+:|\s*Part \([a-z]\)|\s*Boxed Answer:|\s*Conclusion:)/i.test(line);
                    return (
                      <React.Fragment key={lIdx}>
                        {lIdx > 0 && <br />}
                        {isStep ? (
                          <span className="font-bold text-[#F4F4F6] block mt-1.5 mb-0.5">
                            <span dangerouslySetInnerHTML={{ __html: line }} />
                          </span>
                        ) : (
                          <span dangerouslySetInnerHTML={{ __html: line }} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
