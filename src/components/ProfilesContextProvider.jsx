import React from 'react';
import axios from 'axios';

export const ProfileContext = React.createContext({
  profiles: [],
  loading: true,
  error: '',
});

function ProfilesReducer(state, action) {
  let profiles;

  switch (action.type) {
    case 'ascending':
      profiles = state.mutatedProfiles ? [...state.mutatedProfiles] : [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.name > profileB.name ? 1 : -1));
      return { ...state, mutatedProfiles: profiles };

    case 'descending':
      profiles = state.mutatedProfiles ? [...state.mutatedProfiles] : [...state.profiles];
      profiles.sort((profileA, profileB) => (profileA.name < profileB.name ? 1 : -1));
      return { ...state, mutatedProfiles: profiles };

    case 'FETCH_RICKS_SUCCESS':
      return {
        loading: false,
        profiles: action.payload,
        error: '',
      };

    case 'FETCH_RICKS_ERROR':
      return {
        loading: false,
        profiles: [],
        error: 'Something went wrong! Check back in a bit and we should be back 😅',
      };

    case 'FILTER_RICKS':
      profiles = state.profiles.filter((profile) => profile.location.name.includes(action.payload));
      return { ...state, mutatedProfiles: profiles };

    case 'RESET_RICKS':
      return {
        loading: false,
        profiles: state.profiles,
        error: '',
      };

    default:
      throw new Error();
  }
}

function ProfilesContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(ProfilesReducer, {
    profiles: [],
    loading: true,
    error: '',
  });

  React.useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/?name=rick&page=3')
      .then((res) => dispatch({ type: 'FETCH_RICKS_SUCCESS', payload: res.data.results }))
      .catch((err) => dispatch({ type: 'FETCH_RICKS_ERROR' }));
  }, []);

  return (
    <ProfileContext.Provider value={{ ...state, dispatch }}>{children}</ProfileContext.Provider>
  );
}

export default ProfilesContextProvider;
