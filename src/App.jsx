
import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

// import { Button } from './component/button';
// import { Navbar } from './component/Navbar';




function App() {
  // fieldset
  const [name, setName] = useState("");
  //  1.empty depedency(jln ketika pertamakali di render)
  useEffect(() => {
    console.log(name, "ini dari dalam use effect");
  }, []);

  //  2.with depedency(jln ketika pertamakali di render)
  // useEffect(() => {
  //   console.log("ini dari dalam use effect with depedency");
  // }, [name]);

  // useEffect(() => {
  //   console.log("jalan setiap kali apapun state berubah ");
  // });

  return (
    <>
      <div className='grid place-content-center h-screen'>
        {name == "afdhal" ? <p>Hallo Boss</p> : <p>My name is: {name} </p>}

        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
          <legend className="fieldset-legend">Settings</legend>
          <div className="join">
            <input
              type="text"
              className="input join-item"
              placeholder="Product name"

              onChange={(e) => {
                setName(e.target.value);
              }} />

            <button className="btn join-item">save</button>
          </div>
        </fieldset>
      </div>


    </>

  );
}

export default App
