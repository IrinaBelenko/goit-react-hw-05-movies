import { Outlet } from 'react-router-dom';
import {
  Container,
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './SharedLayout.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <LinkWrapper>
              <NavLinkStyled to="/" end>
                Home
              </NavLinkStyled>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
