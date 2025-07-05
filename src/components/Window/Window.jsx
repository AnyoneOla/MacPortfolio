import { useState } from "react";
import { Rnd } from "react-rnd";
import { addApp, removeApp } from '../../features/globalSlice'
import { useDispatch } from 'react-redux';

const style = {
  border: "solid 1px rgb(170,170,170)",
  background: "rgba(30,30,30,0.93)",
  borderRadius: '10px',
  color: 'white',
  backdropFilter: 'blur(10px)',
  overflow: 'hidden',
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica Neue, sans-serif",
};

const initialWindowState = {
  width: 1000,
  height: 600,
  x: 400,
  y: 100,
};

export default function Window({ content, appName }) {
  const [windowState, setWindowState] = useState(initialWindowState);
  const [isMaximized, setIsMaximized] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnterContainer = (event) => {
    const closeBtn = event.target.querySelector('#close')
    const minimizeBtn = event.target.querySelector('#minimize')
    const maximizeBtn = event.target.querySelector('#maximize')
    if(closeBtn){
        closeBtn.innerHTML = '<div style="font-size:10px; font-weight:1000;">✕</div>';
    }
    if(minimizeBtn){
        minimizeBtn.innerHTML = `<div style="width: 8px; height: 1.5px; background-color: black;"></div>`;
    }
    if(maximizeBtn){
        if(isMaximized){
            maximizeBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Apple-style maximize icon">
              <polygon points="12,3 3,12 12,12" fill="black" />
              <polygon points="12,12 21,12 12,21" fill="black" />
            </svg>`
        }
        else{
            maximizeBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Apple-style maximize icon">
                    <polygon points="5,5 17,5 5,17" fill="black" />
                    <polygon points="19,19 8,19 19,8" fill="black" />
                </svg>`
        }
    }
    event.stopPropagation();
  };

  const handleMouseLeaveContainer = (event) => {
    const closeBtn = event.target.querySelector('#close')
    const minimizeBtn = event.target.querySelector('#minimize')
    const maximizeBtn = event.target.querySelector('#maximize')
    if(closeBtn){
        closeBtn.innerHTML = '';
    }
    if(minimizeBtn){
        minimizeBtn.innerHTML = '';
    }
    if(maximizeBtn){
        maximizeBtn.innerHTML = ''
    }
    event.stopPropagation();
  };


  const maximize = () => {
    dispatch(addApp({name : appName}));
    if(!isMaximized){
        setWindowState({
            width: '100vw',
            height: '100vh',
            x: 0,
            y: 0,
          });
    }
    else{
        setWindowState({
            width: 1000,
            height: 600,
            x: 400,
            y: 100,
          });
    }
    setIsMaximized((x)=>!x);
    
  };

  const close = (event) =>{
    dispatch(removeApp({ name: appName }));
    event.stopPropagation();
  }

  return (
    <span name="brightnessEffect" style={{ position: 'relative' }}>
      <Rnd
        style={style}
        minWidth={530}
        minHeight={200}
        size={{ width: windowState.width, height: windowState.height }}
        position={{ x: windowState.x, y: windowState.y }}
        onDragStop={(e, d) => setWindowState({ ...windowState, x: d.x, y: d.y })}
        onResizeStop={(e, direction, ref, delta, position) => {
          setWindowState({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position,
          });
        }}
        onClick = {(event)=>{dispatch(addApp({name : appName})); event.stopPropagation;}}
      >
        <div 
          style={{ padding: '10px', display: 'flex' }}
          onMouseEnter={handleMouseEnterContainer}
          onMouseLeave={handleMouseLeaveContainer}
        >
          {['close', 'minimize', 'maximize'].map((type) => (
            <div
              key={type}
              id={type}
              style={{
                background: { close: '#FE5F57', minimize: '#FFBC2E', maximize: '#2BC840' }[type],
                height: '12.5px',
                width: '12.5px',
                borderRadius: '50%',
                marginLeft: type === 'close' ? '0' : '8px',
                cursor: 'pointer',
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                color: 'black',
              }}
              onClick={type === 'close' ? close : type === 'maximize' ? maximize : type === 'minimize' ? close : 'undefined'}
            ></div>
          ))}
        </div>
        {content}
      </Rnd>
    </span>
  );
}
