import styled from '@emotion/styled';

export const SearchFormStyled = styled.form`
  width: 350px;
  margin-left: auto;
  margin-right: auto;

  position: relative;

  margin-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const Select = styled.input`
  width: 100%;
  height: 50px;

  border-style: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;

  padding: 10px;
  font-size: 18px;
  outline: none;
  letter-spacing: 0.06em;
  font-weight: 200;

  transition: all 0.5s ease-in-out;

  color: #fff;

  cursor: pointer;
`;

export const BtnSearch = styled.button`
  width: 50px;
  height: 50px;

  font-size: 20px;
  font-weight: bold;
  color: #fff;

  position: absolute;
  top: 10px;
  right: 0;
`;
