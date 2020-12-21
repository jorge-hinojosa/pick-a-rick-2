import React from 'react';
import * as Styled from '../styles/StyledSkeleton';

export const GridSkeleton = () => {
  return (
    <Styled.GridCard>
      <Styled.GridAvatar />
    </Styled.GridCard>
  );
};

export const ProfileSkeleton = () => {
  return <Styled.ProfileCard />;
};
