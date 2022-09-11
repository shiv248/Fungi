import * as React from 'react';
import './homePage.css';
import Hello from './components/Hello/StatefullHello';
import Article from '../../components/InfiniteScroll/Article';
import CreatePost from '../../components/CreatePost/CreatePost';
import NavBar from '../../components/NavBar/NavBar';
//import { ReactComponent as YourSvg } from './resources/images/logo.svg';

function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <body className="App-header">
        <CreatePost />
        <Article />
      </body>
    </div>
  );
}

export default HomePage;
