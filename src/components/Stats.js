
export default function Stats({ items }) {
    if (items.length === 0)
      return (
        <p className="stats">
          <em>Start adding items to your packing list 🚀</em>
        </p>
      );
  
    const itemcount = items.length;
  
    const packednum = items.filter((items) => items.packed).length;
  
    const percent = Math.round((packednum / itemcount) * 100);
  
    return (
      <footer className="stats">
        <em>
          {percent === 100
            ? "You are all set to  go ✈ "
            : `💼You have ${itemcount} items on your list, and you already packed ${packednum} (${percent}%)`}
        </em>
      </footer>
    );
  }
  