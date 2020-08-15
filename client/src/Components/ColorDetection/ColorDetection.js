import React from 'react';
import './ColorDetection.css';

const ColorDetection = ({ imageUrl, color_panel }) => {
  return (
    <div className='center ma'>
      <div className='center absolute mt1'>
        {color_panel.map(color_box => {
          return <div key={color_box.c_hex} className='color-box' style={{backgroundColor: color_box.c_hex, width: color_box.w, height: color_box.h}}>
                    <span className='color-box-text'>{color_box.c_hex}</span>{' '}
                  </div>
        })
        }
      </div>

      <div className='center absolute mt5'>
      <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
      </div>
    </div>
  );
}

export default ColorDetection;

