import { useState, useEffect } from 'react';

function App() {
  const [textValue, setTextValue] = useState('');
  const [buttonText, setButtonText] = useState('Convert To Speech');
  const [isSpeaking, setIsSpeaking] = useState(true);
  const [synth, setSynth] = useState(null);
  // const [status, setStatus] = useState('stopped');

  useEffect(() => {
    setSynth(window.speechSynthesis);
  }, []);

  const textToSpeechHandler = (e) => {
    setSynth(window.speechSynthesis);

    if (!synth.speaking && textValue) {
      const speech = new SpeechSynthesisUtterance(textValue);
      synth.speak(speech);
      // setIsSpeaking(true);
    }

    if (textValue.length > 50) {
      if (synth.speaking && isSpeaking) {
        setButtonText('Pause');
        synth.resume();
        setIsSpeaking(false);
      } else {
        setButtonText('Resume');
        synth.pause();
        setIsSpeaking(true);
      }
    }

    setInterval(() => {
      if (!synth.speaking && !isSpeaking) {
        setIsSpeaking(true);
        setButtonText('Convert To Speech');
      }
    });
  };

  return (
    <div className='App flex flex-col items-center justify-center py-4 px-8 bg-indigo-300 w-full h-screen'>
      <div className='max-w-md w-full flex flex-col items-center bg-white p-5 rounded-xl shadow-custom'>
        <header className='text-lg font-medium text-zinc-800'>
          Text To Speech Converter
        </header>
        <textarea
          name='text-converter'
          id='text-converter'
          cols='30'
          rows='10'
          className='block px-4 py-2 w-full h-44 text-base text-zinc-900 bg-gray-50 mx-0 my-5 rounded-lg border border-neutral-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white resize-none outline-none '
          placeholder='Enter Text ...'
          onChange={(e) => setTextValue(e.target.value)}
        ></textarea>
        <button
          onClick={textToSpeechHandler}
          className='w-full px-0 py-4 border-0 rounded-lg bg-indigo-300 hover:bg-indigo-400 transition-all duration-200 ease-in'
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default App;
