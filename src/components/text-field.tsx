import React, { useState } from 'react';

const TextField = () => {
  const [value, setValue] = useState('');

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Send the value back to the parent component
      // You can replace the console.log with your desired logic
      console.log(value);
    }
  };

  return (
    <div
    className='flex justify-center items-center p-4 max-sm:max-w-[262px] max-w-[464px] w-[100%] h-[48px]'
      style={{
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        background: 'rgba(255, 255, 255, 0.20)',
        boxShadow: '8px 8px 16px 0px rgba(0, 0, 0, 0.12), 0px 0px 8px 0px rgba(0, 0, 0, 0.04) inset',
        backdropFilter: 'blur(12px)',
        flexShrink: 0,
        color: '#FFF',
        textShadow: '0px 1.2px 2.4px rgba(0, 0, 0, 0.12), 0px 1.2px 3.6px rgba(0, 0, 0, 0.20)',
        fontFamily: 'Single Day',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '120%',
        letterSpacing: '-0.2px',
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={handleKeyPress}
        style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none' }}
        placeholder='Wallet Address'
      />
    </div>
  );
};

export default TextField;