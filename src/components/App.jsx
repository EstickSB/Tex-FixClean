import { useState, useCallback, useMemo, useEffect } from 'react';
import Header from './Header';
import SortOptions from './SortOptions';
import TextInput from './TextInput';
import TextOutput from './TextOutput';
import Footer from './Footer';
import { SortType } from '../types/enums';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [sortType, setSortType] = useState(SortType.NONE);
  const [isCopied, setIsCopied] = useState(false);

  const inputLineCount = useMemo(() => {
    if (!inputText.trim()) return 0;
    return inputText.split(/\r?\n/).length;
  }, [inputText]);

  const outputLineCount = useMemo(() => {
    if (!outputText.trim()) return 0;
    return outputText.split(/\r?\n/).length;
  }, [outputText]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const processText = useCallback(() => {
    if (!inputText.trim()) {
      setOutputText('');
      return;
    }

    let rawLines = inputText.split(/\r?\n/);
    
    const cleanedLines = rawLines
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const uniqueLines = Array.from(new Set(cleanedLines));

    let resultLines = [...uniqueLines];
    switch (sortType) {
      case SortType.ALPHABETICAL:
        resultLines.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true }));
        break;
      case SortType.ASCII:
        resultLines.sort();
        break;
      case SortType.REVERSE:
        resultLines.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base', numeric: true }));
        break;
      default:
        break;
    }

    setOutputText(resultLines.join('\n'));
  }, [inputText, sortType]);

  useEffect(() => {
    if (inputText.trim()) {
      processText();
    }
  }, [sortType]);

  const handleReset = () => {
    setInputText('');
    setOutputText('');
    setSortType(SortType.NONE);
    setIsCopied(false);
  };

  const handleCopy = async () => {
    if (!outputText) return;
    try {
      await navigator.clipboard.writeText(outputText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Error copying text: ', err);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen p-4 md:p-6 lg:p-10 overflow-y-auto no-scrollbar">
      <Header />
      
      <div className="w-full max-w-5xl glass rounded-[32px] md:rounded-[40px] shadow-2xl flex flex-col min-h-[500px] md:h-[520px] border border-white/10 relative transition-all duration-300">
        
        <div className="flex flex-col items-center bg-white/[0.02] border-b border-white/5 py-5 px-4 gap-4">
          <p className="hidden md:block text-[9px] text-slate-500 font-bold uppercase tracking-[0.4em] opacity-70 text-center">
            Limpieza profunda: Sin espacios, sin duplicados, sin basura
          </p>
          <SortOptions selected={sortType} onSelect={setSortType} />
        </div>

        <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
          <div className="flex-1 min-h-[200px] md:min-h-0">
            <TextInput 
              value={inputText} 
              onChange={handleInputChange} 
              lineCount={inputLineCount}
            />
          </div>
          <div className="flex-1 min-h-[200px] md:min-h-0">
            <TextOutput 
              value={outputText} 
              lineCount={outputLineCount} 
            />
          </div>
        </div>

        <div className="bg-white/[0.04] border-t border-white/5 p-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleReset}
            className="order-3 sm:order-1 text-[9px] font-bold tracking-[0.2em] uppercase text-slate-600 hover:text-red-400 transition-colors px-4 py-2"
          >
            Limpiar todo
          </button>

          <div className="order-2 flex flex-row items-center gap-2 w-full sm:w-auto">
            <button
              onClick={processText}
              className="flex-1 sm:flex-none px-8 md:px-12 py-3 bg-white text-slate-900 text-[10px] font-extrabold tracking-[0.2em] uppercase rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl active:scale-95"
            >
              Procesar
            </button>
            <button
              onClick={handleCopy}
              disabled={!outputText}
              className={`flex-1 sm:flex-none px-6 md:px-10 py-3 rounded-full text-[10px] font-extrabold tracking-[0.2em] uppercase transition-all duration-300 border ${
                !outputText 
                  ? 'border-white/5 text-slate-800 cursor-not-allowed' 
                  : isCopied 
                    ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10' 
                    : 'border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20 active:scale-95'
              }`}
            >
              {isCopied ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;