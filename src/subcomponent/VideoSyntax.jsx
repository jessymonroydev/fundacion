import React from 'react';
import '../styles/videos.css';

export default function VideoSyntax({ url, text }) {
  return (
    <div className="video-container">
      <iframe
        className='video-margenes'
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-popups allow-presentation"
      ></iframe>
      <div className="video-text-container">
        <div className="video-text">{text}</div>
      </div>
    </div>
  );
}


