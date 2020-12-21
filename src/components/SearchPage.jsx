import React from 'react';
import { ProfileContext } from './ProfilesContextProvider';
import MinimalButton from './MinimalButton';
import SearchGrid from './SearchGrid';

import * as Styled from '../styles/StyledSearchPage';

class SearchPage extends React.Component {
  static contextType = ProfileContext;

  handleSortAscending = () => {
    this.context.dispatch({ type: 'ascending' });
  };

  handleSortDescending = () => {
    this.context.dispatch({ type: 'descending' });
  };

  handleFilter = () => {
    this.context.dispatch({ type: 'FILTER_RICKS', payload: 'Earth' });
  };

  handleResetFilters = () => {
    this.context.dispatch({ type: 'RESET_RICKS' });
  };

  render() {
    const { profiles = [], loading = true, error = '', mutatedProfiles } = this.context;

    const PROFILES = mutatedProfiles || profiles;
    const FILTER_SORT_APPLIED = mutatedProfiles;

    return (
      <React.Fragment>
        <main style={{ margin: 24 }}>
          <Styled.ButtonsContainer filterSortApplied={FILTER_SORT_APPLIED}>
            {FILTER_SORT_APPLIED && (
              <Styled.ResetFilterButton onClick={this.handleResetFilters}>
                Reset Profiles
              </Styled.ResetFilterButton>
            )}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <MinimalButton onClick={this.handleFilter}>
                <img src="filter.svg" width={22} alt="filter" />
              </MinimalButton>

              <MinimalButton onClick={this.handleSortAscending}>
                <img src="./ascending.svg" width={22} alt="Sort ascending" />
              </MinimalButton>

              <MinimalButton onClick={this.handleSortDescending}>
                <img src="./descending.svg" width={22} alt="Sort descending" />
              </MinimalButton>
            </div>
          </Styled.ButtonsContainer>

          {error && (
            <Styled.ErrorText>
              <p as="h1">{error}</p>
            </Styled.ErrorText>
          )}

          <SearchGrid profiles={PROFILES} loading={loading} />
        </main>
      </React.Fragment>
    );
  }
}

export default SearchPage;
