import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState(searchParams.get('query') ?? '');

  const handleChange = ({ target: { value } }) => {
    setMovieName(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: movieName });
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="22px" />
      </BtnSearch>
      <Select
        value={movieName}
        aria-label="select"
        name="query"
        required
        onChange={handleChange}
      ></Select>
    </SearchFormStyled>
  );
};
