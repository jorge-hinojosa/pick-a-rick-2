import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const skeleton = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const BaseSkeleton = styled.div(() => ({
  backgroundColor: '#F3F4F4',
  backgroundImage: 'linear-gradient(90deg, #F3F4F4, #E2E3E4, #BFC2C3)',
  backgroundSize: '200px 100%',
  backgroundRepeat: 'no-repeat',
  border: '1px solid lightgray',
  display: 'inline-block',
  borderRadius: 8,
  lineHeight: '1px',
  boxShadow: '0 3px 6px lightgray, 0 3px 6px',
  animation: `${skeleton} 1.2s ease-in-out infinite`,
}));

export const GridCard = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const GridAvatar = styled(BaseSkeleton)(() => ({
  position: 'relative',
  width: '100%',
  maxWidth: 200,
  height: 200,
}));

export const ProfileCard = styled(BaseSkeleton)(() => ({
  maxWidth: 820,
  boxSizing: 'border-box',
  marginTop: 15,

  width: '95%',

  '@media only screen and (min-width: 500px)': {
    width: '70%',
    height: 625,
  },
  '@media only screen and (min-width: 920px)': {
    height: 500,
  },
}));
