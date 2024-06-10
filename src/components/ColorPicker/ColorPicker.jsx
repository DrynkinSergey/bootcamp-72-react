import s from './ColorPicker.module.css';
import colors from '../../assets/colors.json';
import { useState } from 'react';
import { nanoid } from 'nanoid';
export const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState('white');
  const [value, setValue] = useState('');
  const [colorsSet, setColorsSet] = useState(colors);
  const handleColorChange = color => {
    setCurrentColor(color);
  };
  const handleAddColor = () => {
    setColorsSet(prev => [...prev, { id: nanoid(), color: value }]);
  };

  return (
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div className={s.pallette}>
        <h1>Current color: {currentColor}</h1>

        <input value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={handleAddColor}>Add</button>
        <ul className={s.list}>
          {colorsSet.map(item => (
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
