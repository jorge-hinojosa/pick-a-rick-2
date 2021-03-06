import styled from '@emotion/styled';

export const ButtonsContainer = styled.div(({ filterSortApplied }) => ({
  display: 'flex',
  justifyContent: filterSortApplied ? 'space-between' : 'flex-end',
  marginBottom: 15,
}));

export const ResetFilterButton = styled.button(() => ({
  background: 'none',
  color: 'blue',
  border: 'none',
  padding: 0,
  font: 'inherit',
  fontWeight: 'bold',
  cursor: 'pointer',
  outline: 'none',
}));

export const ErrorText = styled.div(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  p: {
    fontSize: 22,
    fontWeight: 'bold',
  },
}));
