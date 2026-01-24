const TextInput = ({ value, onChange, lineCount }) => {
  return (
    <div className="flex flex-col h-full border-r border-white/5">

      <div className="h-[45px] md:h-[52px] flex justify-between items-center px-4 md:px-6 border-b border-white/5 bg-black/20">
        <div className="flex items-center gap-3">
          <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">
            Input
          </span>
          <span className="text-[9px] md:text-[10px] text-slate-500/50 font-mono tracking-tighter">
            {lineCount} lines
          </span>
        </div>
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

          p-4
          text-[13px]
          leading-snug

          md:p-8
          md:text-sm
          md:leading-relaxed
        "
        placeholder="Pega tu texto aquí / Paste your text here..."
      />
    </div>
  );
};

export default TextInput;
