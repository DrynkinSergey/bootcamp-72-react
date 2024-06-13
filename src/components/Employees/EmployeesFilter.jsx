import s from './Employee.module.css';
const skilsList = ['all', 'react', 'angular', 'vue'];

export const EmployeesFilter = ({
  searchValue,
  setSearchValue,
  isAvailable,
  setIsAvailable,
  activeSkill,
  setActiveSkill,
}) => {
  return (
    <div className={s.filtersWrapper}>
      <h1>Filters</h1>
      <div className={s.flex}>
        <input
          className={s.input}
          placeholder='Search...'
          value={searchValue}
          type='search'
          onChange={e => setSearchValue(e.target.value)}
        />
        <label>
          <input type='checkbox' checked={isAvailable} onChange={() => setIsAvailable(!isAvailable)} />
          <span> isAvailable</span>
        </label>
      </div>
      <div className={s.flex}>
        {skilsList.map(radioButtonName => (
          <label key={radioButtonName}>
            <input
              checked={activeSkill === radioButtonName}
              onChange={() => setActiveSkill(radioButtonName)}
              name='radioButtonName'
              type='radio'
              value={radioButtonName}
            />
            <span> {radioButtonName}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
