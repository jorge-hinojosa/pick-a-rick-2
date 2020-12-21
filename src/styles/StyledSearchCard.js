import styled from '@emotion/styled';

export const CardContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const AvatarLink = styled.a(() => ({
  textDecoration: 'none',
  color: '#FFF',
  ':hover': {
    transform: 'scale(1.04)',
  },
}));

export const AvatarContainer = styled.div(() => ({
  border: '1px solid lightgray',
  borderRadius: 8,
  boxShadow: '0 3px 6px lightgray, 0 3px 6px',
  overflow: 'hidden',
}));

export const Avatar = styled.div(() => ({
  position: 'relative',
  width: '200px',
  height: '200px',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
}));

export const AvatarOverlay = styled.div(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  bottom: '0',
  borderRadius: 'inherit',
  backgroundColor: '#000',
  opacity: '0.15',
}));

export const TextContainer = styled.div(() => ({
  position: 'absolute',
  width: '100%',
  bottom: '0',
  borderRadius: 'inherit',
  overflow: 'hidden',
  zIndex: 1,
}));

export const TextFlexContainer = styled.div(() => ({
  margin: 8,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  position: 'relative',
}));

export const TextContent = styled.div(() => ({
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  h6: {
    fontSize: '18px ',
    fontWeight: 'bold',
    margin: '0px',
    padding: '0px',
  },

  span: {
    fontSize: '16px ',
    marginTop: 4,
  },
}));
