import { EmployeesFilter } from './EmployeesFilter';
import { EmployeeList } from './EmployeeList';
import userData from './../../assets/users.json';
import { useState } from 'react';

export const Employee = () => {
  // 1. create state for users !
  // 2. create handler for delete users !
  // 3. search logic for users

  const [users, setUsers] = useState(userData);
  const [searchValue, setSearchValue] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [activeSkill, setActiveSkill] = useState('all');
  const handleDeleteUser = id => {
    console.log(id);
    setUsers(prev => prev.filter(item => item.id !== id));
  };

  const getFilteredData = () => {
    return users
      .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
      .filter(item => (isAvailable === true ? item.isOpenToWork : item))
      .filter(item => (activeSkill === 'all' ? item : item.skills.includes(activeSkill)));
  };
  const filteredUsers = getFilteredData();
  return (
    <>
      <EmployeesFilter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isAvailable={isAvailable}
        setIsAvailable={setIsAvailable}
        activeSkill={activeSkill}
        setActiveSkill={setActiveSkill}
      />
      <EmployeeList users={filteredUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};
