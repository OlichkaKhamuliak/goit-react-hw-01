import { capitalizeFirstLetter } from "../../assets/capitalizeFirstLetter";
import { TransactionRow } from "./TransactionRow";
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return alert('Жодних транзакцій не знайдено'); // Обробка випадку, коли немає транзакцій або вони порожні
  }
  
  //Створюєм масив заголовків (ввиключаєм id)
  const headerItems = Object.keys(transactions[0]).filter(header => header !== 'id');
   const headerCells = headerItems.map((header, index) => (
    <th key={index}>
      {capitalizeFirstLetter(header)}
    </th>
  ));
  
  return (
    <div className={css.wrapper}>
    <table className={css.table}>
      <thead>
        <tr className={css.titles}>{headerCells}</tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <TransactionRow
            key={transaction.id}
            transaction={transaction}
            headerItems={headerItems}
            index={index}
          />
        ))}
      </tbody>
    </table>
    </div>
  );
};