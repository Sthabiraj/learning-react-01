import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) str += "0123456789";
    if (isSymbol) str += "!@#$%^&*()_+";
    if (isNumber && isSymbol) str += "0123456789!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumber, isSymbol]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, isNumber, isSymbol]);

  return (
    <div className="bg-black h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl">Password Generator</h1>
        <p className="text-white text-xl">Generate a random password</p>
        <div className="flex flex-row items-center justify-center">
          <input
            className="bg-gray-800 text-white text-xl border-2 border-gray-600 rounded-md p-2 m-2"
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-gray-800 text-white text-xl border-2 border-gray-600 rounded-md p-2 m-2 hover:bg-gray-600"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="text-orange-600 flex gap-5">
          <div className="flex gap-x-2">
            <input
              type="range"
              name="length"
              id="length"
              min={8}
              max={12}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              className="cursor-pointer"
              defaultChecked={isNumber}
              onChange={() => setIsNumber(!isNumber)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              className="cursor-pointer"
              defaultChecked={isSymbol}
              onChange={() => setIsSymbol(!isSymbol)}
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
