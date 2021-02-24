import React from 'react';

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://th.bing.com/th/id/OIP.78vn2C6cyHzrxmocS4Q6wAHaKZ?pid=ImgDet&rs=1)',
        }}
      ></div>
      <div className="journal__body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          lorem IPSUM jhdsjkahdjhsjdhsajk hdjkashjdhasjhdjkashjkdhjkashdjkash
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>12</h4>
      </div>
    </div>
  );
};
