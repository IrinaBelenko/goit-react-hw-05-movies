import styled from '@emotion/styled';

export const Grid = styled.ul`
  display: grid;

  grid-gap: ${({ theme }) => theme.spacing(3)};
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};

  border: 1px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${({ theme }) => theme.spacing(4)};
  transition: transform 0.5s ${({ theme }) => theme.animations.cubicBezier};
  padding: 5px 10px;
  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${({ theme }) => theme.colors.primary};
  }
`;
