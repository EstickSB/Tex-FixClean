import { useState, useCallback, useMemo, useEffect } from 'react';
import Header from './Header';
import SortOptions from './SortOptions';
import TextInput from './TextInput';
import TextOutput from './TextOutput';
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

  // Real-time processing
  useEffect(() => {
    processText();
  }, [inputText, sortType, processText]);

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
    <div className="w-full flex flex-col items-center justify-center min-h-[100dvh] p-1.5 sm:p-4 md:p-6 overflow-x-hidden">
      <Header />

      <main className="w-full max-w-5xl glass rounded-[20px] sm:rounded-[32px] shadow-2xl flex flex-col min-h-[450px] sm:h-[530px] border border-white/10 relative transition-all duration-300 overflow-hidden">

        <div className="flex flex-col items-center bg-white/[0.02] border-b border-white/5 py-3 px-4 gap-2">
          <p className="hidden sm:block text-[8px] text-slate-400 font-bold uppercase tracking-[0.4em] opacity-60 text-center">
            Limpieza de texto: elimina espacios y líneas duplicadas.
          </p>
          <div className="w-full flex justify-center py-0.5">
            <SortOptions selected={sortType} onSelect={setSortType} />
          </div>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row min-h-0 overflow-hidden">
          <div className="flex-1 min-h-[220px] sm:min-h-0">
            <TextInput
              value={inputText}
              onChange={handleInputChange}
              lineCount={inputLineCount}
            />
          </div>
          <div className="flex-1 min-h-[220px] sm:min-h-0">
            <TextOutput
              value={outputText}
              lineCount={outputLineCount}
              onCopy={handleCopy}
              onReset={handleReset}
              isCopied={isCopied}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;