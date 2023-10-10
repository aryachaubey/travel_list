import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import PackingList from "./PackingList";
import Stats from './Stats';




export default function App() {
  const [items, setItem] = useState([]);

  function handleAdditems(item) {
    setItem((items) => [...items, item]);
  }

  function handledelete(id) {
    setItem((items) => items.filter((items) => items.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm("Are you sure want to clear the list");

    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAdditems} />
      <PackingList
        items={items}
        onDelete={handledelete}
        onToggle={handleToggleItem}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}





