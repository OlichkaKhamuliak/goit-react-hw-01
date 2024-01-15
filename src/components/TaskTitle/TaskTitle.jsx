import css from'./TaskTitle.module.css';

export const TaskTitle = ({ children }) => {
    return <p className={css.title}>{children}</p>;
  };
  

  