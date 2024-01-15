
import IframeComponent from './Iframecomponent'; // Adjust the path as necessary
import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        // Scroll down 100 pixels
        window.scrollBy(0, 300);
      }, []);

  return (
    <div className="App">
      <IframeComponent />
    </div>
  );
}

export default App;
