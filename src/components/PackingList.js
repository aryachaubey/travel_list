import { useState } from "react";
import Item from './Item'

export default function PackingList({ items, onDelete, onToggle, onClear }) {
    const [sortBy, setSortBy] = useState("input");
  
    let sorteditems;
  
    if (sortBy === "input") sorteditems = items;
  
    if (sortBy === "description")
      sorteditems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
  
    if (sortBy === "description")
      sorteditems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
  
    if (sortBy === "packed")
      sorteditems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
  
    return (
      <div className="list">
        <ul>
          {sorteditems.map((item) => (
            <Item
              item={item}
              onDelete={onDelete}
              key={item.id}
              onToggle={onToggle}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">sort by input order</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed status</option>
          </select>
  
          <button onClick={() => onClear()}>clear list</button>
        </div>
      </div>
    );
  }
  