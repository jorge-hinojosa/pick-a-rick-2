import React, { Fragment } from 'react';
import { GridSkeleton } from './Skeleton';
import SearchCard from './SearchCard';
import * as Styled from '../styles/StyledSearchGrid';

const SearchGrid = ({ profiles, loading }) => {
  return (
    <Styled.Grid>
      {profiles && !loading ? (
        profiles.map((profile) => (
          <SearchCard
            key={profile.id}
            id={profile.id}
            photoUrl={profile.image}
            handle={profile.name}
            location={profile.location?.name}
          />
        ))
      ) : (
        <Fragment>
          {Array.from({ length: 20 }, (_, i) => (
            <GridSkeleton key={i} />
          ))}
        </Fragment>
      )}
    </Styled.Grid>
  );
};

export default SearchGrid;
