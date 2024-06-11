import { useState } from 'react';
import Variants from './Variants';
import Options from './Options';

export const Vote = () => {
  const [state, setState] = useState({
    windows: 0,
    mac: 0,
    linux: 0,
    android: 1,
    ios: 2,
  });

  const handleClickChoice = variant => {
    setState(prev => ({ ...prev, [variant]: state[variant] + 1 }));
  };

  return (
    <div>
      <Variants variants={Object.entries(state)} />
      <Options options={Object.keys(state)} handleClickChoice={handleClickChoice} />
    </div>
  );
};
export default Vote;
