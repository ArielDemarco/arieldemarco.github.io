import React from 'react';

const Home = () => {
  const generateError = () => {
    console.log(hello);
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <button type="button" onClick={generateError}>
          Tap / Click me!
        </button>
      </div>
    </div>
  );
};

export default Home;
