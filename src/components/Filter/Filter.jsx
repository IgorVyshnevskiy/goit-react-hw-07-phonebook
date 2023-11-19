import { useDispatch, useSelector } from 'react-redux';
import { getFilter, changeFilter } from 'redux/filterSlice';

import { FilterDiv, Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const hendleFilter = e => {
    dispatch(changeFilter(e.currentTarget.value.trim()));
  };
  return (
    <FilterDiv>
      <Label name="filter">Find contacts by name</Label>
      <Input type="text" name="filter" value={filter} onChange={hendleFilter} />
    </FilterDiv>
  );
};
export default Filter;
