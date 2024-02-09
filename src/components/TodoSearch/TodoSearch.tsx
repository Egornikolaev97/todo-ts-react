import { TodoSearchProps } from '../../types/data';
import { useState } from 'react';
import './TodoSearch.scss';

const TodoSearch: React.FC<TodoSearchProps> = (props) => {
  const { onSearch } = props;
  const [query, setQuery] = useState<string>('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className='todo-search'>
      <button className='todo-search__btn'></button>
      <input
        className='todo-search__input'
        type='text'
        placeholder='Search'
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export { TodoSearch };
