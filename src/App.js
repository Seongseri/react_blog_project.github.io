import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [inputTitle, setInputTitle] = useState(['남자코드 추천 ', '강남 우동 맛집', '문구 추천']);
 
  let [따봉, 따봉변경] = useState([0,0,0]);
  
  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(''); 

  let [입력값, 입력값변경] = useState('');

  let now = new Date();
  let todayYear = now.getFullYear();
  let todayMonth = now.getMonth() + 1;  
  let todayDay = now.getDate();
  let getHours = now.getHours();
  let getMinutes = now.getMinutes();
  let todayFormal = String(todayYear) + "." + String(todayMonth) + "." + String(todayDay);
  let currentTime = String(getHours) + ":" + String(getMinutes);
  const[nowTime,setNowTime] = useState([currentTime, currentTime, currentTime]);
  let[nowDate, setNowDate] = useState([todayFormal, todayFormal, todayFormal]);
  let[arrClick, 몇번째리스트] = useState(0);

  const MySearchBar = (props) => {

    const products = props.searchItems;

    const handleInputChange = (e) => {
      setTitle(e.target.value)
    }

    const shouldDisplayButton = title.length > 0;

    const handleInputClear = () => {
      setTitle("")
    }

    const filteredProducts = products.filter((product) => {
        return product.includes(inputTitle);
    })

    return(
        <div className="searchBar">
            <input type="text" value={title} placeholder="search" onChange={handleInputChange} />
            {shouldDisplayButton && <button className='clo_btn' onClick={handleInputClear}>Ｘ</button>}

            <ul>
                {filteredProducts.map((product) => {
                    return (<li key={product}>{product}</li>)
                })}
            </ul>
        </div>
    )
}

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
  };

  useEffect(() => {
    const ShowButtonClick = () => {
        if (window.scrollY > 500) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }
    window.addEventListener("scroll", ShowButtonClick)
    return () => {
        window.removeEventListener("scroll", ShowButtonClick)
    }
  }, [])
  
  function orderTitle() {
      let newOrder = [...inputTitle].sort();
      setInputTitle(newOrder);
  };
  
  function addPost(b, i) {
    const newPosts = [...inputTitle];
    newPosts.unshift(입력값);
    setInputTitle(newPosts);
    const newToday = [...nowDate];
    newToday.unshift(nowDate[0]);
    setNowDate(newToday);
    const newLiked = [...따봉];
    newLiked.unshift(0);
    따봉변경(newLiked);
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 className='title'>Blog</h4>
      </div>

      <div className='search-nav'><MySearchBar className='search' searchItems={inputTitle}/></div>

      {
        inputTitle.map(function(a, i){
          return (
            <div className="list" key={a}>
              <h3 className='list_tit' onClick={(e) => {
                setModal(!modal); 
                setTitle(i);

                e.stopPropagation();
                let arrClick = [i];
                몇번째리스트(arrClick);
                }}>{inputTitle[i]} 
                <span><button className='btn' onClick={(e) => {
                  e.stopPropagation();
                  const newPosts = [...inputTitle];
                  const newLiked = [...따봉];
                  newPosts.splice(i, 1);
                  newLiked.splice(i, 1);
                  setInputTitle(newPosts);
                  따봉변경(newLiked);
              }}>✖</button></span></h3>
              <p>{nowDate[i]}
                <span className='like' onClick={(e)=>{
                  e.stopPropagation(); 
                  let copy = [...따봉]; 
                  copy[i] += 1; 
                  따봉변경(copy);}}>
                    ❤ {따봉[i]}
                  </span>
              </p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal_Info setModal={setModal} title={title} inputTitle={inputTitle} nowDate={nowDate} nowTime={nowTime} arrClick={arrClick} /> : null
      }

    <div>
        <input onChange={(e)=>{ 입력값변경(e.target.value); }} />
        <button className='btn' onClick={addPost}>✏️</button>
      </div>

      {
        <>
        { showButton &&
          <div>
            <button className='top' onClick={scrollToTop} type="button" >
              <img src='images/arrowhead-up.png'/>
            </button>
          </div>
        }
        </>
      }

    </div>
  );
}

function Modal_Info(props, i){ 
  return (
    <div className='modal'>
      <button className='del_btn' onClick={()=>{
          props.setModal(props.modal);}}>
            ─
      </button>
      <h2>{props.inputTitle[props.title]}</h2>
      <p>{props.nowDate[props.arrClick]} <span>{props.nowTime[props.arrClick]}</span></p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
