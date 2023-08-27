import styled from '@emotion/styled';

export const CardBody = styled.div`
  flex: 1 1 auto;
  padding: 1rem 1rem;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin-bottom: 1rem;

  word-wrap: break-word;

  background-clip: border-box;
  /* border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius); */
`;

export const RowG = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * 0);
  margin-right: calc(-0.5 * 1.5rem);
  margin-left: calc(-0.5 * 1.5rem);
`;

export const ColMd4 = styled.div`
  flex: 0 0 auto;
  width: 33.33333333%;
`;

export const ColMd8 = styled.div`
  flex: 0 0 auto;
  width: 66.66666667%;
`;

export const Img = styled.img`
  max-width: 100%;
  height: auto;
`;
