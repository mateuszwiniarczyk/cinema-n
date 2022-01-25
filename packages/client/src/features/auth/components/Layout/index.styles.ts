import styled from 'styled-components';

export const Wrapper = styled.main`
  position: relative;
  min-height: 100vh;

  & > img {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5rem 2rem;
  max-width: 60rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 1rem;
  z-index: 1;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.6rem;
  font-weight: 500;
  text-align: center;
`;

export const Description = styled.p`
  margin: 1rem 0 2rem 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  text-align: center;

  > a {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
