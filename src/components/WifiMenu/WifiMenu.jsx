import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { toggleWifi } from '../../features/controlCenterSlice'

export default function WifiMenu(){

    const showMenu = useSelector((state)=>state.global.wifiMenu);
    const wifi = useSelector((state)=>state.controlCenter.wifi);


    if(showMenu){
        return (
            <div style={{position:'fixed', top:'2.05rem', right:'11rem', width: '10rem', borderRadius:'8px', backgroundColor:' rgba(35, 35, 35, 0.63)', backdropFilter:'blur(10px)', fontSize:'0.8rem', border:'1px solid rgba(130, 130, 130, 0.3)', padding:'10px', color:'white'}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <div>
                        <b>Wi-Fi</b>
                    </div>
                    <div>
                        <Switch />
                    </div>
                </div>
                <hr className='apple-menu-hr' style={{width:'100%', marginLeft:'0', marginTop:'5px', marginBottom:'5px'}} />
                <div style={{fontSize:'0.55rem', fontColor:'#C8C8C8', marginTop:'8px', fontWeight:'600'}}>
                    Known Devices
                </div>
                <div style={{margin:'0', display:'flex', alignItems:'center', height:'30px', gap:'8px', marginTop:'5px'}}>
                        <div style={{width:'1.5rem', height:'1.5rem', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor: wifi?'rgb(50,120,255)':'rgb(122, 123, 125)'}}>
                            <img style={{height:'0.8rem'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADCUlEQVR4nO2Zz28MYRjHp0X9aEoXkW6laJOm4tD/QLIOfl1I3KQqYsvJRQgJF26V9KJcxEUkDqwfTQjiQIKkEVJUQtKVIKmgkroIau1+5ImHTrYzszOzszuzMZ9kLu+8z/t+vzvvj+d91zBiYmJiYmoRoA5YA6SBE8AVYBR4C0wCP/WZ1LJRrdMP7NbYurDELwJ2AVeBCcpnQs3tBBZWw8AG4DLwncrxDcgA64MWPxvoAZ5SfUaA7cCsck2sA54TPq+ATX4MJHXMRo2MaHNrYiPwgejyGdhSai6cAgpEnwIwKJqLTTQBt8poOK9zSRrfA6SAdiABzNEnoWUprTOoMRLrl5ui3TwfRnyKv6eilnieiNM/4lJgr7aV96FDtCeloWseA2UPOQN0+RXvYKoLOAv88KhpSIKXAS9dBlwHVgVtwMLQcuC8y/ma/beSAW3AG4fKkiOlSnS+GNgKDOjYzVrkWmP6bkDrJlzsY+8cdInmtuKgDmDcovJFoNmmowZgB3AbyOGdnBqTzKHBpo9m3T+KEa0ddr/AauCjqfIxq8wUmAscAN4THCJsv5UhzbCPm+p+Eq1OX1OCurVi2ub9Zh02lWLMLh3RtF+0dTuaMAU0WZTNB05XacMs6OY8z40218g+ATyk+jySVdW38CIT7RUeSqV4LRqCMCJJ5FSIRqZEQ1BfZZvL5fUX8AA4BKwFOoFGfTq17LDWkbqlyEnfgZgwmelxyIUkpTgJtHhoL6mJo93XzkufgZowdd5nsWpJ1ryijDZX6oZqRvroC1b9zI73mTrrL/s8Pb3hyZD7+8UPBqO2dMcyB3odUoq0XhXJavdVn6yWpR1Snl5p2wgTTVuOAl9cTGJJII9IjBElgFZgGO88kTliRMjEOP6R2NawfRg6UeXE6JdzQL0RBYB64IIPE5kZNyFhI8swcMmDiSG5XTGiCH9OjDdcmLhjlaJHCj233HUwIceBRqMWABYA9y1MDJd1MArxz6DHJhPPSt2aRBZNV+Qm8IXcKBq1DNDiJb2PiYmJ+T/4DTfNiE/k/kV0AAAAAElFTkSuQmCC' />
                        </div>
                        <div>
                            <div style={{fontSize:'0.8rem', display:'flex', alignItems:'center', color:'white'}}>
                                Home
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
    else{
        return (
            <></>
        )
    }
}

const Switch = ({ onChange, disabled = false }) => {
    const [isChecked, setIsChecked] = useState(useSelector((state)=>state.global.wifi));
    const dispatch = useDispatch();
    const wifi = useSelector((state)=>state.controlCenter.wifi);
  
    const handleToggle = () => {
      if (!disabled) {
        const newState = !isChecked;
        setIsChecked(newState);
        dispatch(toggleWifi())
        onChange?.(newState);
      }
    };

    useEffect(()=>{
        setIsChecked(wifi);
    }, [isChecked]);
  
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <button
          type="button"
          role="switch"
          aria-checked={isChecked}
          disabled={disabled}
          onClick={handleToggle}
          style={{
            position: 'relative',
            width: '30px',
            height: '18px',
            borderRadius: '12px',
            backgroundColor: isChecked ? '#3171F3' : '#ccc',
            border: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            transition: 'background-color 0.2s',
            padding: 0
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '2px',
              left: '2px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s',
              transform: isChecked ? 'translateX(12px)' : 'translateX(0)',
            }}
          />
        </button>
      </div>
    );
  };