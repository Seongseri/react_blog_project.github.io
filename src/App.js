// /* eslint-disable */

import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  // let [글제목, 글제목변경] = useState('남자 코드 추천'); // a : 남자 코트 추천이 들어감, b : 남자 코트 추천 state 정정해주는 함수
  // let [글제목3, 글제목변경3] = useState(['남자 코드 추천 ', '강남 우동 맛집']);
  const [글제목, 글제목변경] = useState(['남자코드 추천 ', '강남 우동 맛집', '문구 추천']);
  // let [글제목2, 글제목변경2] = useState('남자 코드 추천2');
  // a,b라는 변수를 만듬. 그런데 useState에 있던 그 두개의 데이터를 각각 넣어줌
  // ES6 destructuring 문법(신문법)
  // useState 보통 이런식으로 사용함. 그 이유는 여기 안에 데이터 두 개가 남아있기 떄문
  // [state 데이터, state 데이터 변경 함수]

  // [10, 100]; -> 이 두개 데이터를 변수로 담고 싶으면?
  // var [a,b] = [10, 100]; // 10, 100을 a와 b변수에 담음
  // array, object에 있던 자료를 변수에 쉽게 담고 싶을 때
  // var a =10
  // var b = 100

  let [따봉, 따봉변경] = useState([0,0,0]);
  // state 변경방법
  // 따봉이랑 같이 만들었던 따봉변경()
  // let post = '강남 고기 맛집2222';  // 변수에 데이터 저장
  // 따봉변경(10); // 따봉이라는 것을 변경해줌, 따봉이라는 것을 10으로 변경 해줌, 따봉변경(대체할 데이터)
  //아예 대체해버리는 함수, 여기에다가 쓰면 재렌더링이 무한이 됨
  
  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(0); //state를 자식에 만들면 부모 -> 자식 전송할 필요없음
  // 근데 state가 Modal, App에서 필요하면 App에 만들어놔야 함
  // state 만드는 곳은 state 사용하는 컴포넌트들 중 최상위 컴포넌트

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
    // var newArray = 글제목; // 이건 복사가 아니라 값 공유, reference data type 특징임(ES6 문법)
    var newArray = [...글제목]; // 별개의 복사본을 만들고 싶다면 object도 중괄호 하면 deep copy하면 됨
    // <state 데이터 수정 테그닉>
    // 리액트 대원칙 : immutable data
    newArray[0] = '여자코드 추천';
    글제목변경( newArray );
    // 수정된 [데이터]를 만듬. 근데 state의 deep copy해서 수정함
    // deep copy : 값 공유x, 서로 독립적인 값을 가지는 복사
    // 글제목변경(['여자코드 추천 ', '강남 우동 맛집', '문구 추천']); // 하드코딩
  };

  // function orderTitle() {
  //   let newOrder = [...글제목].sort();
  //   글제목변경(newOrder);
  // };
  
  function addPost(b, i) {
    const newPosts = [...글제목];
    newPosts.unshift(입력값);
    글제목변경(newPosts);
    const newToday = [...현재날짜];
    newToday.unshift(현재날짜[i]);
    현재날짜변경(newToday);
    const newLiked = [...따봉];
    newLiked.unshift(0);
    따봉변경(newLiked);
  }

  return (
    <div className="App">
      <div class='black-nav'>
        {/* <div className={posts}>개발 Blog</div> */}
        <h4>React Blog</h4>
      </div>
      {/* <button onClick={ 제목바꾸기 }>버튼</button>
      <button onClick={ orderTitle }>가나다순</button> */}
      {/* 제목바꾸기() -> 함수 바로 실행하라는 뜻 */}
      {/* <div className="list"> */}
        {/* <h3>{글제목[0]} <span onClick={()=>{console.log(1)}} > 👍 </span> 0 </h3> 데이터 바인딩 */}
        {/* 위와 같은 방법으로 라면 재렌더링이 잘 일어나지 않음 */}
        {/* <h3 onClick={() => {setModal(!modal)}}>{글제목[0]} <span onClick={ ()=>{let copy = [...좋아요]; copy[0]+=1; 좋아요변경(copy);} } >👍</span> {좋아요[0]} </h3> {/* 잘못된 문법, state는 그냥 변경 안 됨 */}
        {/* state 변경함수로 변경하셔야 재렌더링이 잘 일어남 */}
        {/* 옛날 자바스크립트를 사용하면 addEventListener, onClick */}
        {/* onClick="클릭할 때 실행할 JS" */}
        {/* onClick={클릭할 때 실행할 함수} */}
        {/* onClick={()=>{실행할 내용}} */}
        {/* <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3 onClick={() => {setModal(!modal)}}>{글제목[1]} <span onClick={ ()=>{let copy = [...좋아요]; copy[1]+=1; 좋아요변경(copy);} } >👍</span> {좋아요[1]} </h3> 
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3 onClick={() => {setModal(!modal)}}>{글제목[2]} <span onClick={ ()=>{let copy = [...좋아요]; copy[2]+=1; 좋아요변경(copy);} } >👍</span> {좋아요[2]} </h3> 
        <p>2월 17일 발행</p>
      </div> */}
      {/* <Modal /> */}
      {/* <Modal></Modal> 그리고 맘대로 사용 */} 
      {/* HTML을 한 단어로 줄여서 쓸 수 있는 방법 */}
      {/* 리액트의 Component 문법 */}

      <div>
        <input onChange={(e)=>{ 
          입력값변경(e.target.value); //  이거 완료되기 전에 
          // console.log(입력값); {/* 다음줄 실행해줌 */}
        }} />
        {/* state변셩함수는 늦게 처리됨(비동기처리) */}
        <button onClick={addPost}>추가</button>
      </div>

      {/* i -> 반복문이 돌 때마다 0부터 1씩 증가하는 정수 */}
      {/* 반복문으로 html 생성하면 key={html마다 다른숫자} 추가해야함 */}
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
              }}>✖</button></span>
                </h3>
              {/* 클릭이벤트는 상위 html로 퍼짐(이벤트버블링) */}
              {/* 상위 html로 퍼지는 이벤트버블링을 막고 싶으면 e.stopPropagation() */}
              <p>{현재날짜[i]}
              <span className='like' onClick={(e)=>{
                e.stopPropagation(); 
                let copy = [...따봉]; 
                copy[i]+=1; 따봉변경(copy);}}>🖤 {따봉[i]}</span></p>
            </div>
          )
        })
      }

      {/* {
        modal == true ? <Modal/> : null
      } */}
      
      {
        modal == true ? <Modal title={title} 글제목={글제목} 글제목변경={제목바꾸기} 현재날짜={현재날짜} 현재시간={현재시간} arrClick={arrClick} /> : null //color={'skyblue'}
      }

    </div>
  );
  /*
  return (
    <div></div>
    <div></div>
    <div></div>
  )
  이건 불가능
  */
}

// Component 만드는 법
function Modal(props, i){ // 이름 짓기
  return (
    // 원하는 HTML 담고
    <div className='modal'> {/*style={{background : props.color}}*/}
        <h2>{props.글제목[props.title]}</h2>
        <p>{props.현재날짜[props.arrClick]} <span>{props.현재시간[props.arrClick]}</span></p>
        <p>상세내용</p>
        <button onClick={props.글제목변경}>글수정</button>
    </div>
  )
}

export default App;
