import React from 'react';
import GraphImg from 'graphcms-image';
import PropTypes from 'prop-types';

const GraphImgManually = ({ id, w, h, maxWidth }) => {
  const object = {
    handle: id,
    width: parseFloat(w),
    height: parseFloat(h),
  };
  return (
    <div>
      <GraphImg image={object} maxWidth={maxWidth} />
    </div>
  );
};

GraphImgManually.propTypes = {
  id: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  maxWidth: PropTypes.number,
};
GraphImgManually.defaultProps = {
  id: '',
  w: 0,
  h: 0,
  maxWidth: 0,
};
export default GraphImgManually;
