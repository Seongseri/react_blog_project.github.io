// /* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {

  const [글제목, 글제목변경] = useState(['남자코드 추천 ', '강남 우동 맛집', '문구 추천']);
 
  let [따봉, 따봉변경] = useState([0,0,0]);
  
  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(0); 
  let [inputContent,setInputContent] = useState("");

  let [입력값, 입력값변경] = useState('');

  let now = new Date();
  let todayYear = now.getFullYear();
  let todayMonth = now.getMonth() + 1;  
  let todayDay = now.getDate();
  let getHours = now.getHours();
  let getMinutes = now.getMinutes();
  let todayFormal = String(todayYear) + "." + String(todayMonth) + "." + String(todayDay);
  let currentTime = String(getHours) + ":" + String(getMinutes);
  const[현재시간, 현재시간변경] = useState([currentTime, currentTime, currentTime]);
  let[현재날짜, 현재날짜변경] = useState([todayFormal, todayFormal, todayFormal]);
  let[arrClick, 몇번째리스트] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목]; 
    newArray[0] = '여자코드 추천';
    글제목변경( newArray );
  }
  
  function addPost(b, i) {
    const newPosts = [...글제목];
    newPosts.unshift(입력값);
    글제목변경(newPosts);
    const newToday = [...현재날짜];
    newToday.unshift(현재날짜[0]);
    현재날짜변경(newToday);
    const newLiked = [...따봉];
    newLiked.unshift(0);
    따봉변경(newLiked);
  }

  return (
    <div className="App">
      <div class='black-nav'>
        <h4 className='title'>
          Blog
          <span>
          <button className='menu_btn'>
            <img src='images/menu.png' className='menu' />
            </button>
          </span>
        </h4>
        
      </div>

      <div>
        <input onChange={(e)=>{ 입력값변경(e.target.value); }} />
        <button onClick={addPost}>추가</button>
      </div>

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key="0">
              <h3 onClick={(e) => {
                setModal(!modal); 
                setTitle(i);

                e.stopPropagation();
                let arrClick = [i];
                몇번째리스트(arrClick);
                }}>{글제목[i]} 
                <span><button className='btn' onClick={(e) => {
                  e.stopPropagation();
                  const newPosts = [...글제목];
                  const newLiked = [...따봉];
                  newPosts.splice(i, 1);
                  newLiked.splice(i, 1);
                  글제목변경(newPosts);
                  따봉변경(newLiked);
              }}>─</button></span></h3>
              <p>{현재날짜[i]}
                <span className='like' onClick={(e)=>{
                  e.stopPropagation(); 
                  let copy = [...따봉]; 
                  copy[i] += 1; 
                  따봉변경(copy);}}>
                    🖤 {따봉[i]}
                  </span>
              </p>
            </div>
          )
        })
      }
      
      {
        modal == true ? <Modal_Info setModal={setModal} title={title} 글제목={글제목} 글제목변경={제목바꾸기} 현재날짜={현재날짜} 현재시간={현재시간} arrClick={arrClick} /> : null //color={'skyblue'}
      }


    </div>
  );
}

function Modal_Info(props, i){ 
  return (
    <div className='modal'>
      <button className='del_btn' onClick={()=>{
          props.setModal(props.modal);}}>
            ✖
      </button>
      <h2>{props.글제목[props.title]}</h2>
      <p>{props.현재날짜[props.arrClick]} <span>{props.현재시간[props.arrClick]}</span></p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
