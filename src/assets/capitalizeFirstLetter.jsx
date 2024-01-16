//Функція, яка перетворює перший символ слова на велику літеру.
export const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };