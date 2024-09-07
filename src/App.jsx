import { useState } from "react";
import "./App.css";

function App() {
  const [inp, setInp] = useState("");
  const [showValue, setShowValue] = useState([]);

  const addValue = () => {
    setShowValue([...showValue, inp]);
    setInp("");
  };

  const remove = () => {};

  return (
    <>
      <div className="w-2/5 p-8 bg-white my-40 mx-auto rounded-2xl">
        <div className="flex gap-3">
          <h1 className="text-4xl">Todo App</h1>
          <img
            className="w-14"
            src="https://static.wixstatic.com/media/02d54a_bd2021f8d3ac46c4a2a1061b60997db7~mv2.png/v1/crop/x_13,y_13,w_475,h_460/fill/w_440,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/booklist.png"
            alt=""
          />
        </div>
        <br />
        <div>
          <input
            className="bg-gray-200 p-3 w-4/5 rounded-full text-black outline-none"
            value={inp}
            placeholder="Add Your Text"
            type="text"
            onChange={(event) => {
              setInp(event.target.value);
            }}
          />
          <button
            className="rounded-full bg-orange-400 w-24 p-2 text-white text-lg"
            onClick={addValue}
          >
            Add
          </button>
        </div>
        <br />
        <ul className="text-gray-700 text-xl flex justify-around">
          {showValue.map((items, index) => (
            <li
              className=" bg-slate-200 p-2 rounded-xl w-full relative"
              key={index}
            >
              {items}
              <span
                onClick={remove}
                className="absolute top-2 right-5 cursor-pointer"
              >
                &#10005;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
