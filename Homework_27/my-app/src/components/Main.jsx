export const Main = () => {
    
  return (
    <div>
      <div className="containerTodo">
        <h1>ToDoList</h1>
        <form className="form js--form">
          <input
            type="text"
            name="value"
            required
            className="form__input js--form__input"
          />
          <button className="form__btn">Додати</button>
        </form>
        <ul className="js--todos-wrapper">
          <li className="todo-item">
            <input type="checkbox" />
            <span className="todo-item__description">Text</span>
            <button className="todo-item__delete">Видалити</button>
          </li>
          <li className="todo-item todo-item--checked">
            <input type="checkbox" />
            <span className="todo-item__description">Text</span>
            <button className="todo-item__delete">Видалити</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
