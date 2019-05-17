import React from 'react';

import p400 from 'images/person400.png';
import p900 from 'images/person900.png';
import p1300 from 'images/person1300.png';
import p1900 from 'images/person1900.png';

const MainImage = () => (
  <img
    className="sd"
    src={p400}
    srcSet={`${p400} 300w, ${p900} 768w, ${p1300} 1280w, ${p1900} 1900w`}
    alt="Moje zdjęcie"
  />
);

export default MainImage;
