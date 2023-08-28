import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 20px;

  :hover {
    color: orangered;
  }
`;
