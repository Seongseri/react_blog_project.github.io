import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  // let posts = '강남 고기 맛집';  
  let posts = { color : 'blue', fontSize : '30px' }  
  //document.getElementById().innerHTML = ''? // 전통적인 자바스크립트 데이터바인딩

  return (
    <div className="App">
      <div class='black-nav'>
        {/* <div className={posts}>개발 Blog</div> */}
        <div style={ posts }>개발 Blog</div>
      </div>
      {/* <img src={logo} /> */}
      {/* <h4> { posts } </h4>  */}
    </div>
  );
}

export default App;
