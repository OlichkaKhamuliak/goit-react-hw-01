import { capitalizeFirstLetter } from "../../assets/capitalizeFirstLetter";

// Компонент для представлення комірки в рядку транзакції
export const TransactionCell = ({ value }) => (
  <td>{capitalizeFirstLetter(value)}</td>
);
  