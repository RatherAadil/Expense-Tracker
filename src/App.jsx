import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseTable from "../components/ExpenseTable";
import "./App.css";
import ExpenseData from "./expenseData";

function App() {
  const [expenses, setExpenses] = useState(ExpenseData);
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTable expenses={expenses} />
        </div>
      </main>
    </>
  );
}

export default App;
