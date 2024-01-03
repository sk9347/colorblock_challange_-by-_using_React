import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect, useRef } from 'react';
import "./Game.css"
import { useNavigate } from 'react-router-dom'

const RedAndGreen=()=>{


  // const nav=useNavigate()
  const [boxColor, setBoxColor] = useState('green');
  const [points, setPoints] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);
  const [massage,setmassage]=useState("")
  const nav=useNavigate()
  const [name,setname]=useState("")


  const handleStart = () => {

    clearInterval(intervalRef.current);

    // Start a new interval for changing box color
    const randomInterval = Math.floor(Math.random() * 1000) + 1000;
    intervalRef.current = setInterval(() => {
      setBoxColor((prevColor) => (prevColor === 'green' ? 'red' : 'green'));
    }, randomInterval);

    // Reset points and timer
    setPoints(0);
    setSeconds(0);
    // Start the timer
    timehand();
  };

  const handleBoxClick = () => {
    if (boxColor === 'green') {
      setPoints((prevPoints) => prevPoints + 1);
      if(points===10){
            setShow(true)
          setmassage("you win")
      }
    } else if (boxColor === 'red') {
      handleGameOver();
    }
    
  };

  const handleGameOver = () => {
    setPoints(0);
    setSeconds(0);
    clearInterval(intervalRef.current);
    setShow(true)
    setmassage("Game Over!")
  };
  



  const timehand = () => {
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  //box styling
  const style = {
    backgroundColor: boxColor,
    cursor: 'pointer',
  };
   
 


  if(seconds===41 ){
       setSeconds(0)
       
  }
  
 

  const [show, setShow] = useState(false);

  const handleClose = () =>{
     setShow(false)
    nav('/PreGame')};
  const handleShow = () => setShow(true);
  
 
  useEffect(()=>{namehandle()},[])
  const namehandle=()=>{
    const n=JSON.parse(localStorage.getItem("data"))
    console.log(n.username)
    setname(n.username)
  }

  return (
    <>
    <h1 style={{textAlign:"center",color:"white"}}>Easy Level</h1>
    <div className='body'>
    <h1 style={{color:"white"}}>Player Name : {name}</h1>
    <div className='cont'>
        {/* it is the main div */}
        <div style={style} onClick={handleBoxClick} className='main'>
         
        </div>
    </div>
    <div className='container'>
    {seconds === 40 && <div className="time-message">Timeout!</div>}
      {points === 10 && <div className="win-message">You Win!</div>}
      
      <p>Points: {points}</p>
      <p>Time: {seconds} seconds</p>
      <button onClick={handleStart}>Start Game!</button>
     </div>
     </div>
   
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body><h1>{massage}</h1></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </>
    
  );
};

export default RedAndGreen;

