import './App.css';


import React, { useState } from 'react';

import Structure from './components/Structure';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      
      <Structure />
    </div>
  );
};

export default App;
