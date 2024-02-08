import { useState, useRef, useEffect } from 'react';
import { ITodo } from '../../types/data';
import './TodoItem.scss'

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo, editTodo, date, time } =
    props;
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(title);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const todoItemRef = useRef<HTMLInputElement | null>(null);

  // Handle input change:
  //Updates the state with the current value of the input field
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditText(e.target.value);
  };

  // Enabling the edit form
  const handleEdit = () => {
    setIsEdit(true);
  };

  // Handle saving edited text:
  // Updates the todo if edited text is not empty and then exits edit mode
  const handleSaveEdit = () => {
    if (editText.trim() !== '') {
      editTodo(id, editText.trim());
    }
    setIsEdit(false);
  };

  // Saving the edit when the 'Enter' key is pressed
  // and canceling the edit when the 'Esc' key is pressed
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      setIsEdit(false);
    }
  };

  // Cancel editing mode when a click occurs outside the todo-item
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isEdit &&
        todoItemRef.current &&
        !todoItemRef.current.contains(e.target as Node)
      ) {
        setIsEdit(false);
      }
    };
    if (isEdit) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEdit]);

  // Setting the focus on input
  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <div
      className={`todo-item ${complete ? 'todo-item_completed' : ''} ${
        isEdit ? 'todo-item_editing' : ''
      } ${isEdit && complete ? 'todo-item_editing-completed' : ''}`}
      ref={todoItemRef}
    >
      {!isEdit ? (
        <>
          <input
            className='todo-item__input'
            type='checkbox'
            checked={complete}
            onChange={() => toggleTodo(id)}
          />
          <div className='todo-item__area'>
            <p className='todo-item__title' onClick={handleEdit}>
              {title}
            </p>
            <div>
              <span className='todo-item__time'>{date}</span>
              <span className='todo-item__time'>{time}</span>
            </div>
          </div>
          <button
            className='todo-item__btn-delete'
            onClick={() => removeTodo(id)}
          >
            <div className='todo-item__delete-icon' aria-label='delete'></div>
          </button>
        </>
      ) : (
        <>
          <input
            className='todo-item__input'
            type='checkbox'
            checked={complete}
            onChange={() => toggleTodo(id)}
          />
          <input
            className='todo-item__input-edit'
            type='text'
            maxLength={30}
            value={editText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <div className='todo-item__btn-container'>
            <button
              className='todo-item__save-btn'
              onClick={handleSaveEdit}
            ></button>
            <button
              className='todo-item__cancel-btn'
              onClick={() => setIsEdit(false)}
            ></button>
          </div>
        </>
      )}
    </div>
  );
};

export { TodoItem };
