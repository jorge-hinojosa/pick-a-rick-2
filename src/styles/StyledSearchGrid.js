import styled from '@emotion/styled';

export const Grid = styled.div(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '16px',

  '@media only screen and (min-width: 401px)': {
    gridTemplateColumns: '1fr 1fr',
  },
  '@media only screen and (min-width: 700px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  '@media only screen and (min-width: 920px)': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },
  '@media only screen and (min-width: 1200px)': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  },
}));
