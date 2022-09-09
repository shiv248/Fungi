import * as React from 'react';
import './App.css';
import Hello from './components/Hello/StatefullHello';
import Article from './components/InfiniteScroll/Article';
import PostCard from './components/PostCard/PostCard';
import CreatePost from './components/CreatePost/CreatePost';
//import { ReactComponent as YourSvg } from './resources/images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreatePost />
      </header>
    </div>
  );
}

export default App;
