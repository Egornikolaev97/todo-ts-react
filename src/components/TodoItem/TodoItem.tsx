import { useState, useRef, useEffect } from 'react';
import { ITodo } from '../../types/data';
import './TodoItem.scss';
import { Draggable } from 'react-beautiful-dnd';

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  toggleTodo: (id: number) => void;
  index: number;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const {
    id,
    title,
    complete,
    removeTodo,
    toggleTodo,
    editTodo,
    date,
    time,
    index,
  } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(title);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const todoItemRef = useRef<HTMLInputElement | null>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEditText(e.target.value);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSaveEdit = () => {
    if (editText.trim() !== '') {
      editTodo(id, editText.trim());
    }
    setIsEdit(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      setIsEdit(false);
    }
  };


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

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEdit]);

  return (
    <Draggable draggableId={`todo-${id.toString()}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`todo-item ${complete ? 'todo-item_completed' : ''} ${
            isEdit ? 'todo-item_editing' : ''
          } ${isEdit && complete ? 'todo-item_editing-completed' : ''}`}
        >
          {!isEdit ? (
            <>
              <input
                className='todo-item__input'
                type='checkbox'
                checked={complete}
                onChange={() => toggleTodo(id)}
              />
              <div className='todo-item__area' onClick={handleEdit}>
                <p className='todo-item__title'>{title}</p>
                <div>
                  <span className='todo-item__time'>{date}</span>
                  <span className='todo-item__time'>{time}</span>
                </div>
              </div>
              <button
                className='todo-item__btn-delete'
                onClick={() => removeTodo(id)}
              >
                <div
                  className='todo-item__delete-icon'
                  aria-label='delete'
                ></div>
              </button>
            </>
          ) : (
            <>
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
      )}
    </Draggable>
  );
};

export { TodoItem };
