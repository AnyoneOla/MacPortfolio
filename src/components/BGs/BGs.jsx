import { useEffect } from 'react';
import BG1 from '../../assets/bg1.png';
import BG2 from '../../assets/bg2.png';
import BG3 from '../../assets/bg3.png';
import BG4 from '../../assets/bg4.png';
import BG5 from '../../assets/bg5.png';
import BG6 from '../../assets/BG.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleAppleMenuTag,
  toggleControlCenterTag,
  toggleBatteryMenu,
  toggleWifiMenu,
  toggleSidebarMenu,
} from '../../features/globalSlice';

const bg = [BG1, BG2, BG3, BG4, BG5, BG6];

export default function GetBackground() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.global.bg_id);

  // Preload images on component mount
  useEffect(() => {
    bg.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
    });
  }, []);

  const handleClick = () => {
    dispatch(toggleAppleMenuTag(false));
    dispatch(toggleControlCenterTag(false));
    dispatch(toggleBatteryMenu(false));
    dispatch(toggleWifiMenu(false));
    dispatch(toggleSidebarMenu(false));
  };

  return (
    <img
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        height: '100vh',
        width: '100vw',
      }}
      src={bg[id]}
      onClick={handleClick}
      alt="Background"
    />
  );
}
