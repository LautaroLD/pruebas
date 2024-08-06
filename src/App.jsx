import { useEffect, useState } from 'react';
import annyang from 'annyang';
export default function Home() {
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (!annyang) {
      alert('Lo siento, tu navegador no soporta el reconocimiento de voz :(');
    }
    if (annyang) {
      annyang.addCommands({
        '*text': (text) => {
          setTranscript((prev) => prev + ' ' + text);
        },
      });
      annyang.setLanguage('es-AR');
      annyang.start();
    }
  }, []);

  return (
    <div>
      <h1>Dictado por Voz</h1>
      <p>{transcript}</p>
    </div>
  );
}
