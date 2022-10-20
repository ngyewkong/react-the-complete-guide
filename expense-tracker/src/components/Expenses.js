import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        id={props.expenseObjects[0].id}
        title={props.expenseObjects[0].title}
        amount={props.expenseObjects[0].amount}
        date={props.expenseObjects[0].date}
      ></ExpenseItem>
      <ExpenseItem
        id={props.expenseObjects[1].id}
        title={props.expenseObjects[1].title}
        amount={props.expenseObjects[1].amount}
        date={props.expenseObjects[1].date}
      ></ExpenseItem>
      <ExpenseItem
        id={props.expenseObjects[2].id}
        title={props.expenseObjects[2].title}
        amount={props.expenseObjects[2].amount}
        date={props.expenseObjects[2].date}
      ></ExpenseItem>
      <ExpenseItem
        id={props.expenseObjects[3].id}
        title={props.expenseObjects[3].title}
        amount={props.expenseObjects[3].amount}
        date={props.expenseObjects[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
