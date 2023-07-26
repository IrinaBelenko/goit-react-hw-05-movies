import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.mainBackground};

  box-shadow: 0px 2px 10px 1px ${({ theme }) => theme.colors.dark};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  height: 40px;
`;
export const Container = styled.div`
  width: 100%;

  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.s}) {
    width: ${({ theme }) => theme.breakpoints.s};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: ${({ theme }) => theme.breakpoints.m};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: ${({ theme }) => theme.breakpoints.l};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;

  text-transform: uppercase;

  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};

  transform: scale(0.9);

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
  }

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};

    padding: 6px 12px;
    border-radius: 4px;

    transform: scale(1);
    pointer-events: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};

  margin-left: ${({ theme }) => theme.spacing(7)};
`;
