import React, {useState} from 'react';
import Lists from './List';

const App = () => {

  const [inputList , setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems( (old) => {
      return [...old , inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    setItems( (old) => {
      return old.filter( (arrElem , index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main">
        <div className="center">
          <h1>ToDo List</h1>
        <br/>

        <input type="text" placeholder="Add Items" value={inputList} onChange={itemEvent} />
        <button onClick={listOfItems}> + </button>

        <ol>
          {Items.map( (val , index) => {
            return <Lists key={index} id={index} text={val} onSelect={deleteItems} />;
          })}
        </ol>
        </div>
      </div>
    </>
  );
};

export default App;