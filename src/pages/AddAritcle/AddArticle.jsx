import { useState } from 'react';
import s from './AddArticle.module.css';
import clsx from 'clsx';
export const AddArticle = ({ addArticle }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = () => {
    addArticle({ title, body, tags });
    setTitle('');
    setBody('');
    setTags('');
  };
  return (
    <div className={s.wrapper}>
      <div className={s.addForm}>
        <h1>Add article</h1>

        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className='input'
          type='text'
          placeholder='Enter your title...'
        />
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          className='input'
          placeholder='Enter your body...'
        />
        <input
          value={tags}
          onChange={e => setTags(e.target.value)}
          className='input'
          type='text'
          placeholder='Enter your tags...'
        />
        <div className={s.buttons}>
          <button onClick={handleSubmit} className={clsx(s.teal, 'btn')}>
            Add
          </button>
          <button onClick={handleSubmit} className={clsx('btn', s.red)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
