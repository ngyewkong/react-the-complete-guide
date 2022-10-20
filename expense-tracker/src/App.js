import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 21),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 5, 1) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 8, 11),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 9, 10),
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses expenseObjects={expenses}></Expenses>
    </div>
  );
}

export default App;
