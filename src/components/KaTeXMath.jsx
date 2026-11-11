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
    <div className={`space-y-4 leading-relaxed text-[#D1D1D6] font-sans ${className}`}>
      {paragraphs.map((para, pIdx) => {
        // Highlight step indicators (e.g. "Step 1:", "Part (a)", "Boxed Answer:")
        const parts = para.split(/(\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g);

        return (
          <div key={pIdx} className="leading-relaxed text-sm sm:text-base">
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
                    const isBoxed = /^\s*Boxed Answer:/i.test(line);
                    const numDefMatch = line.match(/^(\s*\d+\.\s+[^—–-]+?)\s*([—–-])\s*(.*)$/);
                    const bulletMatch = line.match(/^(\s*[-•]\s*)([^:]+?:\s*)(.*)$/);

                    return (
                      <React.Fragment key={lIdx}>
                        {lIdx > 0 && <br />}
                        {isBoxed ? (
                          <span className="block mt-2.5 mb-1 p-2.5 rounded-lg bg-[#18181A] border border-emerald-500/30 text-emerald-300 font-bold text-sm sm:text-base">
                            {line}
                          </span>
                        ) : isStep ? (
                          <span className="font-bold text-[#F4F4F6] block mt-2 mb-1 text-sm sm:text-base">
                            {line}
                          </span>
                        ) : numDefMatch ? (
                          <span className="block mt-2 mb-1 leading-relaxed">
                            <strong className="text-[#F4F4F6] font-bold">{numDefMatch[1]} — </strong>
                            <span className="text-[#D1D1D6]">{numDefMatch[3]}</span>
                          </span>
                        ) : bulletMatch ? (
                          <span className="block pl-4 my-1 leading-relaxed text-sm sm:text-[15px]">
                            <span className="text-emerald-400 font-bold mr-1">•</span>
                            <strong className="text-[#F4F4F6] font-medium">{bulletMatch[2]}</strong>
                            <span className="text-[#D1D1D6]">{bulletMatch[3]}</span>
                          </span>
                        ) : (
                          <span>{line}</span>
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
