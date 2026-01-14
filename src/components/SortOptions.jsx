import { SORT_OPTIONS } from '../constants/sortOptions';

const SortOptions = ({ selected, onSelect }) => {
  return (
    <div className="flex gap-1 md:gap-2 p-1 bg-white/5 rounded-full border border-white/5 shadow-inner">
      {SORT_OPTIONS.map((option) => (
        <div key={option.value} className="relative group">
          <button
            onClick={() => onSelect(option.value)}
            className={`px-3 md:px-5 py-2 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
              selected === option.value
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40'
                : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
            }`}
          >
            {option.label}
          </button>
          
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
            <div className="bg-slate-950 text-[8px] md:text-[9px] text-slate-300 px-3 py-2 rounded-lg shadow-2xl border border-white/10 whitespace-nowrap uppercase tracking-widest font-bold">
              {option.tip}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-950 rotate-45 border-b border-r border-white/10"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SortOptions;