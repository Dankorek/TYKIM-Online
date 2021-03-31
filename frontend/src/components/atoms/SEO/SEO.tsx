import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title: string;
}

const SEO: React.FC<Props> = ({ title }) => (
  <Helmet>
    <html lang="pl" />
    <title>{title}</title>
  </Helmet>
);

export default SEO;
