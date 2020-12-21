import React from 'react';
import ProfilesContextProvider from './components/ProfilesContextProvider';
import Header from './components/Header';
import routes from './routes';
import './styles.css';

function App() {
  return (
    <ProfilesContextProvider>
      <Header />
      {routes}
    </ProfilesContextProvider>
  );
}

export default App;
