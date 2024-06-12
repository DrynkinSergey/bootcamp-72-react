import { useState } from 'react';
import s from './Articles.module.css';
import { Filters } from './FIlters';
import { List } from './List';
import { SearcBar } from './SearcBar';
export const Articles = ({
  user,
  filter,
  setNewRating,
  setFilter,
  articles,
  deleteArticle,
  searchStr,
  setSearchStr,
  handleChangeLike,
}) => {
  return (
    <div>
      <h2 className={s.title}>Articles</h2>
      <SearcBar searchStr={searchStr} setSearchStr={setSearchStr} />
      <Filters filter={filter} setFilter={setFilter} />
      <List
        setNewRating={setNewRating}
        user={user}
        articles={articles}
        handleChangeLike={handleChangeLike}
        deleteArticle={deleteArticle}
      />
    </div>
  );
};
