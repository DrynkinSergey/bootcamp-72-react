import s from './ColorPicker.module.css';
import colors from '../../assets/colors.json';
import { useState } from 'react';
export const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState('white');
  const handleColorChange = color => {
    setCurrentColor(color);
  };
  console.log('Render ColorPicker');
  return (
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div className={s.pallette}>
        <h1>Current color: {currentColor}</h1>
        <ul className={s.list}>
          {colors.map(item => (
            <li
              style={{ backgroundColor: item.color }}
              onClick={() => handleColorChange(item.color)}
              className={s.item}
              key={item.id}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
