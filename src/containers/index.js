import React from 'react';
import Main from './Main';
import Header from './../components/Header';
import Footer from './../components/Footer';

const App = () => (
  <React.Fragment>
    <Header />
    <Main id={1} />
    <Footer />
  </React.Fragment>
);

export default App;