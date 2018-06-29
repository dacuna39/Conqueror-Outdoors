/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import WrapperCenter from 'components/Containers/WrapperCenter';

import Link from 'components/Link';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 1em 5%;
  color: #eee;
`;

const H = styled.p`
  font-size: 3em;
  text-align: center;
  font-weight: bold;
  margin: 0;
`;

/* images */
import Woodsbackground from 'images/woods-background.png';

export default function NotFound() {
  return (
    <article>

      <div style={{
        background: `url(${Woodsbackground})`,
        backgroundSize: 'contain',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '55em',
      }}>
        <PageContainer>
          <WrapperCenter>
            <div> <H> Page Not Found </H> </div>
            {/* <div> <Link to='/'> Return Home </Link> </div> */}
          </WrapperCenter>
        </PageContainer>
      </div>

      
    </article>
  );
}
