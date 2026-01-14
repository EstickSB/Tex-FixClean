const TextInput = ({ value, onChange, lineCount }) => {
  return (
    <div className="flex flex-col h-full border-r border-white/5">
      
      {/* Header más compacto en móvil */}
      <div className="flex justify-between items-center px-3 md:px-6 py-1.5 md:py-2 border-b border-white/5 bg-black/20">
        <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">
          Input
        </span>
        <span className="text-[9px] md:text-[10px] text-slate-500 font-mono tracking-tighter">
          {lineCount} lines
        </span>
      </div>

      <textarea
        value={value}
        onChange={onChange}
        spellCheck={false}
        className="
          flex-1
          bg-transparent
          resize-none
          focus:outline-none
          font-mono
          min-h-[200px] sm:min-h-0

          text-slate-200
          placeholder:text-slate-500
          no-scrollbar

          p-3
          text-[13px]
          leading-snug

          md:p-6
          md:text-sm
          md:leading-relaxed
        "
        placeholder="Pega tu texto aquí / Paste your text here..."
      />
    </div>
  );
};

export default TextInput;
