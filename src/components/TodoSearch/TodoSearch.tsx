import { TodoSearchProps } from '../../types/data';
import './TodoSearch.scss';

const TodoSearch: React.FC<TodoSearchProps> = ({ onChange, value }) => {
  return (
    <div className='todo-search'>
      <input
        className='todo-search__input'
        type='text'
        placeholder='Search'
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export { TodoSearch };

