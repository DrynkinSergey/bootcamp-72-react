import { useState } from 'react';
import s from './Articles.module.css';
import { FIlters } from './FIlters';
import { List } from './List';
import { SearcBar } from './SearcBar';
export const Articles = ({ articles, deleteArticle, searchStr, setSearchStr, handleChangeLike }) => {
  return (
    <div>
      <h2 className={s.title}>Articles</h2>
      <SearcBar searchStr={searchStr} setSearchStr={setSearchStr} />
      <FIlters />
      <List articles={articles} handleChangeLike={handleChangeLike} deleteArticle={deleteArticle} />
    </div>
  );
};
