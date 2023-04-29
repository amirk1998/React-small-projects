import { useState } from 'react';

const RandomPassword = () => {
  const [rangeValue, setRangeValue] = useState(8);
  const [passwordValue, setPasswordValue] = useState('');

  // const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  // const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // const numberChars = '0123456789';
  // const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>/?';

  const allCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  const passwordGeneratorHandler = (e) => {
    let newPassword = '';

    for (let i = 0; i < rangeValue; i++) {
      let randomNumbers = Math.floor(Math.random() * allCharacters.length);
      newPassword += allCharacters[randomNumbers];
    }
    setPasswordValue(newPassword);
    console.log(newPassword);
  };

  const rangeInputHandler = (e) => {
    setRangeValue(e.target.value);
    // passwordGeneratorHandler();
  };

  const copyPasswordHandler = (e) => {
    if (passwordValue.length) {
      return navigator.clipboard.writeText(passwordValue);
    }
  };

  return (
    <div className='flex flex-col items-center bg-white max-w-md w-full rounded-xl py-12 px-6 shadow-custom'>
      <div className='relative h-12 w-full'>
        <input
          type='text'
          className='bg-transparent border-2 border-neutral-400 text-gray-900 text-base rounded-lg outline-none focus:border-indigo-500 block w-full h-full py-0 pr-11 pl-4 '
          value={passwordValue}
          placeholder='Random Password'
          disabled
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          onClick={copyPasswordHandler}
          className='w-6 h-6 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 stroke-neutral-500 hover:stroke-violet-500'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
          />
        </svg>
      </div>
      <div className='w-full flex items-center mt-8'>
        <input
          type='range'
          name='passwordLength'
          id='passwordLength'
          className='w-full h-2 accent-violet-500 rounded-lg cursor-pointer'
          min='6'
          max='20'
          step='1'
          value={rangeValue}
          onChange={rangeInputHandler}
        />

        <span className='text-base text-neutral-500 min-w-[30px] text-right '>
          {rangeValue}
        </span>
      </div>

      <button
        onClick={passwordGeneratorHandler}
        className='w-full text-white bg-indigo-400 py-3 px-0 mt-8 border-0 rounded-lg hover:bg-indigo-600 transition-all duration-200 ease-linear'
      >
        Generate Password
      </button>
    </div>
  );
};

export default RandomPassword;
