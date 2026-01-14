const TextOutput = ({ value, lineCount }) => {
  return (
    <div className="flex flex-col h-full bg-white/[0.005]">
      
      <div className="flex justify-between items-center px-3 md:px-6 py-1.5 md:py-2 border-b border-white/5 bg-black/20">
        <span className="text-[7px] md:text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">
          Output
        </span>
        <span className="text-[9px] md:text-[10px] text-slate-500 font-mono tracking-tighter">
          {lineCount} line
        </span>
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

          p-3
          text-[13px]
          leading-snug

          md:p-6
          md:text-sm
          md:leading-relaxed
        "
        placeholder="Resultado limpio / Clean result..."
      />
    </div>
  );
};

export default TextOutput;
