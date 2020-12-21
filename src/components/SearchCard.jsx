import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from '../styles/StyledSearchCard';

export default class Search extends React.PureComponent {
  render() {
    const { photoUrl = '', handle = '', location = '', id = 1 } = this.props;

    return (
      <Styled.CardContainer>
        <Styled.AvatarLink as={Link} to={`/profile/${id}`} className="rick-card">
          <Styled.AvatarContainer>
            <Styled.Avatar>
              <img src={photoUrl} alt="potential date"></img>
              <Styled.TextContainer>
                <Styled.TextFlexContainer>
                  <Styled.TextContent>
                    <h6>{handle}</h6>
                    {location && location !== 'unknown' && <span>{location}</span>}
                  </Styled.TextContent>
                </Styled.TextFlexContainer>
              </Styled.TextContainer>
              <Styled.AvatarOverlay />
            </Styled.Avatar>
          </Styled.AvatarContainer>
        </Styled.AvatarLink>
      </Styled.CardContainer>
    );
  }
}
