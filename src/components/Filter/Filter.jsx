import { useDispatch, useSelector } from 'react-redux';
import css from '../Filter/Filter.module.css';
import { change } from 'redux/filterSlice';

const Filter = () => {
  const filterValue = useSelector(state => state.filterValue);
  const dispatch = useDispatch();

  const onFielterChange = event => {
    dispatch(change(event.currentTarget.value));
  };

  return (
    <>
      <label>
        Find contacts by name
        <input
          className={css.input}
          placeholder="Search"
          onChange={onFielterChange}
          value={filterValue}
        ></input>
      </label>
    </>
  );
};

export default Filter;
