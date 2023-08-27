import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-top: 10px;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: ${props => props.color};

  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${({ theme }) => theme.spacing(4)};
  transition: transform 0.5s ${({ theme }) => theme.animations.cubicBezier};

  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${({ theme }) => theme.colors.primary};
  }
`;
