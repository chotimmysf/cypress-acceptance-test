import { useState } from 'react';

import Add from './__tests__/Add';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (newItem) => {
    setItems(oldItems => oldItems.concat([newItem]));
  };

  return (
    <>
    <Add />
    </>
  );
}

export default App;
