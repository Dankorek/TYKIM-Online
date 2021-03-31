import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Logo from '../../components/atoms/Logo/Logo.styles';
import { NavigationWrapper, NavigationLink } from './Home.styles';

const Home: React.FC<RouteComponentProps> = () => (
  <MainTemplate title="TYKIM Online">
    <Logo>Logo</Logo>
    <NavigationWrapper>
      <NavigationLink to="">Logowanie</NavigationLink>
      <NavigationLink to="">Rejestracja</NavigationLink>
      <NavigationLink to="">Samouczek</NavigationLink>
      <NavigationLink to="">Forum</NavigationLink>
      <NavigationLink to="">Facebook</NavigationLink>
      <NavigationLink to="">Kontakt z nami</NavigationLink>
    </NavigationWrapper>
  </MainTemplate>
);

export default Home;
