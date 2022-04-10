import { useState } from "react";

export const Inventory = () => {
  // const [count,setCount]=useState(0)
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 36
  });
  // console.log(inv.books)
  // Create add and remove functions here that changes the
  // state.
  const handleChange = (value, item) => {
    // console.log(value,item,inv)

    // inv[item]=inv[item]+value
    setInv({
      books: inv.books + value,
      notebooks: inv.notebooks,
      pens: inv.pens,
      inkpens: inv.inkpens
    });
  };
  // const handleChange=(value)=>{
  //   // console.log(inv.books)
  //   setInv({
  //     books:inv.books+value,
  //     notebooks:inv.notebooks,
  //     pens:inv.pens,

  //   })
  // }
  // const handleChange=(value)=>{
  //   // console.log(inv.books)
  //   setInv({
  //     books:inv.books+value,
  //     notebooks:inv.notebooks,
  //     pens:inv.pens,

  //   })
  // }
  // const handleChange=(value)=>{
  //   // console.log(inv.books)
  //   setInv({
  //     books:inv.books+value,
  //     notebooks:inv.notebooks,
  //     pens:inv.pens,

  //   })
  // }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px"
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button
          className="circlularButton"
          onClick={() => handleChange(1, "books")}
        >
          +
        </button>
        <button className="circlularButton" onClick={() => handleChange(-1)}>
          -
        </button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button
          className="circlularButton"
          onClick={() => {
            console.log(inv);
            inv.notebooks = inv.notebooks + 1;
          }}
        >
          +
        </button>
        <button className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
      {/*calculate total and show it*/}
      total: {0}
    </div>
  );
};
