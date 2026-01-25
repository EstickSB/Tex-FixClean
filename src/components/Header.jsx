const Header = () => {
  return (
    <div className="flex flex-col items-center mb-4 md:mb-8 text-center">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white drop-shadow-2xl">
        Tex<span className="text-blue-500">Fix</span>Clean
      </h1>
      <div className="flex items-center gap-3 mt-2 sm:mt-3 md:mt-4">
        <div className="h-1 w-8 bg-blue-500 rounded-full opacity-50"></div>
        <span className="text-[10px] text-slate-500 font-mono font-bold tracking-widest uppercase opacity-40">v1.0.4</span>
        <div className="h-1 w-8 bg-blue-500 rounded-full opacity-50"></div>
      </div>
    </div>
  );
};

export default Header;