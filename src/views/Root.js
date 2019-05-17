import React from 'react';
// import PostTemplates from 'templates/PostTemplates';
import ViewTemplates from 'templates/ViewTemplates';
import MainImage from 'components/atoms/MainImage/MainImage';

function App() {
  return (
    <div>
      <ViewTemplates>
        <div>
          <MainImage />
        </div>
      </ViewTemplates>
    </div>
  );
}

export default App;
