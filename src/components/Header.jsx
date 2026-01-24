const Header = () => {
  return (
    <div className="flex flex-col items-center mb-4 md:mb-8 text-center">
      <h1 className="text-2xl md:text-5xl font-black tracking-tighter text-white drop-shadow-2xl">
        Tex<span className="text-blue-500">Fix</span>Clean
      </h1>
      <div className="h-1 w-12 bg-blue-500 rounded-full mt-2 md:mt-4 opacity-50"></div>
    </div>
  );
};

export default Header;