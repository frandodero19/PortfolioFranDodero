import React from 'react';
import Lottie from 'react-lottie';
import avatarAnimation from './Avatar.json';
import './InteractiveAvatar.css'; // Asegúrate de que el archivo CSS está en la ruta correcta

const InteractiveAvatar = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: avatarAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="avatar-container">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default InteractiveAvatar;
