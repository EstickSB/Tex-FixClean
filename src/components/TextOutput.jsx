const TextOutput = ({ value, lineCount, onCopy, onReset, isCopied }) => {
  return (
    <div className="flex flex-col h-full bg-white/[0.005]">

      <div className="h-[45px] md:h-[52px] flex justify-between items-center px-4 md:px-6 border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-3">
          <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">
            Output
          </span>
          <span className="text-[9px] md:text-[10px] text-slate-500/50 font-mono tracking-tighter">
            {lineCount} lines
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            title="Limpiar todo"
            className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>

          <button
            onClick={onCopy}
            disabled={!value}
            title={isCopied ? "¡Copiado!" : "Copiar"}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all duration-200 ${!value
              ? 'opacity-30 cursor-not-allowed text-slate-600'
              : isCopied
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
          >
            {isCopied ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            )}
            {isCopied ? '¡Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      <textarea
        readOnly
        value={value}
        spellCheck={false}
        className="
          flex-1
          bg-transparent
          resize-none
          min-h-[190px] sm:min-h-0
          focus:outline-none
          font-mono
          text-blue-400/80
          placeholder:text-slate-500
          no-scrollbar

          p-4
          text-[13px]
          leading-snug

          md:p-8
          md:text-sm
          md:leading-relaxed
        "
        placeholder="Resultado limpio / Clean result..."
      />
    </div>
  );
};

export default TextOutput;
