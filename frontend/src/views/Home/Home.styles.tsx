import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 24px 0 24px;
`;

const NavigationLink = styled(Link)`
  width: fit-content;
  margin-bottom: 4px;
  color: #000000;
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;

  :last-child {
    margin-bottom: 0;
  }
`;

export { NavigationWrapper, NavigationLink };
