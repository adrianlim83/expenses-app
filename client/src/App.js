import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // Define a default state for expenses' array
  const [expenses, setExpenses] = useState([]);

  // Construct a use effect which fetching the expenses list api from server
  // asynchrounously
  // When the respond are valid and no error, we will set the expenses payload
  // into setExpenses
  // Which then the useEffect will trigger the react component to update the
  // state changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/expenses/list");
      const data = await response.json();
      setExpenses(data);
    };
    fetchData();
  }, []);

  // When the expenses' state has been updated sucessfully, we will then render
  // each of the expenses item with ES6 map
  return (
    <div className="expenses-list">
      <div className="headers-item-list">
        <span>Description</span>
        <span>Price</span>
      </div>

      {expenses &&
        expenses.map((expense) => (
          <div className="expenses-item-list">
            <span>{expense.description}</span>
            <span>{expense.price}</span>
          </div>
        ))}
    </div>
  );
}

export default App;