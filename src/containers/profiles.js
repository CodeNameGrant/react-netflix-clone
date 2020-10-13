import React from 'react'
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'
import { Header, Profiles } from '../components';

export function SelectProfileContainer({ user, setProfile }) {

  const clickProfileItemHandler = () => {
    setProfile({
      displayName: user.displayName,
      photoURL: user.photoURL
    })
  }

  return (
    <>
      <Header background={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix' />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item onClick={clickProfileItemHandler}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  );
}