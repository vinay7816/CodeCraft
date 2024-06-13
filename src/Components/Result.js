import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../Context/Dataprovider';

const Result = () => {
  const [src, setSrc] = useState('');
  const { html, css, js } = useContext(DataContext);

  const srcCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div style={{ backgroundColor: html || css || js ? 'white' : 'white' }}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts allow-same-origin"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Result;
