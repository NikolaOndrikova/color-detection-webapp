import React from 'react';

const Welcome = ({ name, entries }) => {
  if (entries === 0){
    return (
      <div className='grey f2'>
        {`Welcome, ${name}!`}
      </div>
    );
  } else {
    return (
      <div className='grey f2'>
        {`Welcome again, ${name}!`}
      </div>
    );
  }
}

export default Welcome;