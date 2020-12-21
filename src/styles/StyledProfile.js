import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  width: '100%',
  minHeight: 'calc(100vh - 68px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
}));

export const Card = styled.div(() => ({
  maxWidth: 820,
  boxSizing: 'border-box',
  border: '1px solid lightgray',
  borderTop: '50px solid blue',
  borderRadius: 8,
  boxShadow: '0 3px 6px lightgray, 0 3px 6px',
  marginTop: 15,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',

  padding: '10px 25px',
  width: '95%',
  flexDirection: 'column',

  '@media only screen and (min-width: 500px)': {
    padding: '25px 40px',
    width: '70%',
    height: 500,
    flexDirection: 'row',
  },
}));

export const CardAvatar = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'center',
  textAlign: 'center',

  width: '100%',

  '@media only screen and (min-width: 500px)': {
    width: '55%',
  },

  img: {
    maxWidth: 250,
    height: 'auto',
    borderRadius: 8,
  },
}));

export const CardDetails = styled.div(() => ({
  width: '100%',

  '@media only screen and (min-width: 500px)': {
    width: '45%',
    paddingBottom: 50,
  },
}));

export const Bullet = styled.span(() => ({
  fontSize: '20px',
  lineHeight: '22px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  padding: '15px 10px',

  p: {
    margin: 0,
    marginLeft: 15,
    padding: 0,
    fontSize: '22px',
  },
}));

export const BackButton = styled.button(() => ({
  marginTop: 20,
  background: 'none',
  color: 'blue',
  border: 'none',
  padding: 0,
  font: 'inherit',
  fontWeight: 'bold',
  cursor: 'pointer',
  outline: 'none',
}));
