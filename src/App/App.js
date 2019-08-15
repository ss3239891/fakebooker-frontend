import React from 'react';
import InitialPage from './components/InitialPage';

import FeatureState from './context/feature/FeatureState';

const App = () => {
  return (
    <FeatureState>
      <InitialPage />
    </FeatureState>
  );
};

export default App;
