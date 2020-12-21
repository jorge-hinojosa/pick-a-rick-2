import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ProfileContext } from './ProfilesContextProvider';
import { ProfileSkeleton } from './Skeleton';
import * as Styled from '../styles/StyledProfile';

const Profile = (props) => {
  const context = useContext(ProfileContext);
  const [currentRick, setCurrentRick] = useState();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const rick = context.profiles.find((rick) => rick.id === Number(props.match.params.id));
    if (!rick) return setRedirect(true);
    setCurrentRick(rick);
  }, [context.profiles, props.match.params.id]);

  if (context.error || redirect) return <Redirect to="/" />;

  if (context.loading)
    return (
      <Styled.Container>
        <ProfileSkeleton />
      </Styled.Container>
    );

  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.CardAvatar>
          <img src={currentRick?.image} alt={currentRick?.name} />
          <h1>{currentRick?.name}</h1>
        </Styled.CardAvatar>
        <Styled.CardDetails>
          <Styled.Bullet>
            Species: <p>{currentRick?.species}</p>
          </Styled.Bullet>
          <Styled.Bullet>
            Gender: <p>{currentRick?.gender}</p>
          </Styled.Bullet>
          <Styled.Bullet>
            Location:
            <p>{currentRick?.location?.name}</p>
          </Styled.Bullet>
          <Styled.Bullet>
            Status:
            <p>{currentRick?.status}</p>
          </Styled.Bullet>
          <h2> </h2>
        </Styled.CardDetails>
      </Styled.Card>
      <Link to="/">
        <Styled.BackButton>Back to Results</Styled.BackButton>
      </Link>
    </Styled.Container>
  );
};

export default Profile;
