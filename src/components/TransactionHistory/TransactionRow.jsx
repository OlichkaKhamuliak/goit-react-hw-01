import { TransactionCell } from "./TransactionCell";
import css from './TransactionHistory.module.css'

// Компонент для представлення рядка транзакції
export const TransactionRow = ({ transaction, headerItems, index }) => (
    <tr key={transaction.id} className={index % 2 === 0 ? css.even : css.odd}>
      {headerItems.map((header, index) => (
        <TransactionCell key={index} value={transaction[header]} />
      ))}
    </tr>
  );