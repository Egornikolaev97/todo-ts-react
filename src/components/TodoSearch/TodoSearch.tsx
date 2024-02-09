import { TodoSearchProps } from '../../types/data';
import { useState } from 'react';
<<<<<<< HEAD
import './TodoSearch.scss';
=======
import './TodoSearch.scss'
>>>>>>> 3469b08 (создал репозеторий(только сейчас))

const TodoSearch: React.FC<TodoSearchProps> = (props) => {
  const { onSearch } = props;
  const [query, setQuery] = useState<string>('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='todo-search'>
<<<<<<< HEAD
      <button className='todo-search__btn'></button>
      <input
        className='todo-search__input'
=======
      <div className='todo-search__icon'></div>
      <input className='todo-search__input'
>>>>>>> 3469b08 (создал репозеторий(только сейчас))
        type='text'
        placeholder='Search'
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export { TodoSearch };
