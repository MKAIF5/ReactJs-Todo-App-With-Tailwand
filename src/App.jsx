import { useState } from "react";
import "./App.css";

function App() {
  const [inp, setInp] = useState("");
  const [showValue, setShowValue] = useState([]);

  const addValue = () => {
    setShowValue([...showValue, inp]);
    setInp("");
  };
  const handleAdd = (e) =>{
    if(e.keyCode === 13){
      addValue()
    }
  }

  const removeValue = (index) => {
    const removeList = [...showValue];
    removeList.splice(index, 1);
    setShowValue(removeList)
  };

  return (
    <>
      <div className="w-2/5 p-8 bg-white my-40 mx-auto rounded-2xl">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl">Todo App</h1>
          <img
            className="w-14"
            src="https://static.wixstatic.com/media/02d54a_bd2021f8d3ac46c4a2a1061b60997db7~mv2.png/v1/crop/x_13,y_13,w_475,h_460/fill/w_440,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/booklist.png"
            alt="Booklist Icon"
          />
        </div>
        <br />
        <div className="flex gap-1">
          <input
            className="bg-gray-200 p-3 w-full rounded-full text-black outline-none"
            value={inp}
            placeholder="Add Your Text"
            type="text"
            onChange={(event) => setInp(event.target.value)}
            onKeyDown={handleAdd}
          />
          <button
            className="rounded-3xl bg-orange-400 p-2 text-white text-lg flex-shrink-0"
            onClick={addValue}
          >
            Add
          </button>
        </div>
        <br />
        <div>
          <ul className="text-gray-700 text-xl max-h-60 overflow-auto">
            {showValue.map((items, index) => (
              <li
                className="bg-slate-200 p-2 rounded-xl w-full relative mb-2"
                key={index}
              >
                {items}
                <span
                  className="absolute top-2 right-2 cursor-pointer hover:bg-slate-100 rounded p-1"
                  onClick={() => removeValue(index)}
                >
                  &#10005;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;