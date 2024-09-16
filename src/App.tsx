import React, { useState } from "react";
import "./App.css";
interface author {
  id: number;
  name: string;
}
interface dataType {
  id: number;
  title: string;
  body: string;
  author: author;
}
const App = () => {
  const [dataResource, setDataResource] = useState<dataType[]>([]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log((e.currentTarget.elements[0] as HTMLInputElement).value);
    
    setDataResource(e.currentTarget.elements. as HTMLInputElement).value)
  };
  const handleRemove = () => {};
  const handleUpdate = () => {};

  return (
    <div className="container">
      <div className="left-container">
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
      <div className="right-container"></div>
    </div>
  );
};

export default App;
