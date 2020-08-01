import React from 'react';
import './App.scss';
import Header from '../Header/Header'
import Card from '../Card/Card'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Card bgTemp="hot" />
      <Card bgTemp="rainy" />
      <Card bgTemp="mild" />
      <Card bgTemp="cold" />
      <Card bgTemp="storm" />

    </div>
  );
}

export default App;
