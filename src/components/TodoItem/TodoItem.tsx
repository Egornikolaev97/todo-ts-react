import { useState, useRef, useEffect } from 'react';
import { ITodo } from '../../types/data';

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

  // Setting the focus on input
  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <div>
      {!isEdit ? (
        <>
          <input
            type='checkbox'
            checked={complete}
            onChange={() => toggleTodo(id)}
          />
          {title}
          <div className='todo-date-time'>
            {date} {time}
          </div>
          <button onClick={() => removeTodo(id)}>x</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      ) : (
        <>
          <input
            type='text'
            value={editText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      )}
    </div>
  );
};

export { TodoItem };
