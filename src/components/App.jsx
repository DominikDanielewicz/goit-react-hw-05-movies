import React from 'react';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <AppRoutes />
    </div>
  );
};

export default App;
