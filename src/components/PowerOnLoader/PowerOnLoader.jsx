import React, { useEffect, useState } from 'react';
import appleLogo from '../../assets/apple_logo_load.png'
import { setLoading, setReboot } from '../../features/globalSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function PowerOnLoader(){
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();
  const loading =  useSelector((state)=>state.global.loading);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 2;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 100);
    return () =>{clearInterval(interval)}
  }, []);

  useEffect(()=>{
    if(progress===100){
        dispatch(setLoading(false));
        dispatch(setReboot(true));
    }
  }, [progress])

  if(!loading){
    return <></>
  }

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img
          src={appleLogo}
          alt="Apple Logo"
          style={styles.logo}
        />
      </div>
      <div style={styles.progressBarContainer}>
        <div style={{ ...styles.progressBar, width: `${progress}%` }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position:'fixed',
    left:'0px',
    top:'0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    zIndex:'2000',
  },
  logoContainer: {
    marginBottom: '20px',
  },
  logo: {
    width: '120px',
    height: '100px',
  },
  progressBarContainer: {
    width: '13%',
    height: '5px',
    backgroundColor: 'grey',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'white',
    borderRadius: '5px 0 0 5px',
    transition: 'width 0.1s linear',
  },
};

