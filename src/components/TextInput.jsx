const TextInput = ({ value, onChange, lineCount }) => {
  return (
    <div className="flex flex-col h-full border-r border-white/5 overflow-hidden">
      <div className="flex justify-between items-center px-6 py-2 border-b border-white/5 bg-black/20">
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold">Entrada</span>
        <span className="text-[9px] text-slate-600 font-mono tracking-tighter">{lineCount} líneas</span>
      </div>
      <textarea
        value={value}
        onChange={onChange}
        spellCheck={false}
        className="flex-1 bg-transparent p-4 md:p-6 resize-none focus:outline-none text-slate-200 placeholder:text-slate-800 font-mono text-sm leading-relaxed no-scrollbar"
        placeholder="Pega tu texto aquí..."
      />
    </div>
  );
};

export default TextInput;