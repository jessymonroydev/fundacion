import React from 'react';

export default function VideoSyntax({ url }) {
  return (
    <div className="video-container">
      <iframe
        width="400"
        height="200"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        sandbox="allow-same-origin allow-scripts allow-popups"
      ></iframe>
    </div>
  );
};

