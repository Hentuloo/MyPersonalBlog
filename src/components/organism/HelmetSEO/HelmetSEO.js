import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const HelmetSEO = ({ titlePageSEO, contentPageSEO, keywordsSEO }) => {
  return (
    <Helmet>
      <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
      <meta name="description" content={contentPageSEO} />
      <meta name="keywords" content={keywordsSEO} />
      <link rel="index" title="Strona główna" href="http://chentekwdzialaniu.pl" />
      <title>{titlePageSEO}</title>
      <meta name="theme-color" content="#1a242d" />
    </Helmet>
  );
};

HelmetSEO.propTypes = {
  titlePageSEO: PropTypes.string,
  contentPageSEO: PropTypes.string,
  keywordsSEO: PropTypes.string,
};

HelmetSEO.defaultProps = {
  titlePageSEO: 'chentek-stronka',
  contentPageSEO: 'Blog o zwiększaniu władzy nad sobą',
  keywordsSEO: 'chentek w dzialaniu wladza produktywnosc skutecznosc',
};
export default HelmetSEO;
