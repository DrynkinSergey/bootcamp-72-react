import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../../redux/blogSlice';
import { useEffect } from 'react';
import { fetchBlogThunk } from '../../redux/blogOperations';

const List = ({ handleEdit }) => {
  const data = useSelector(selectItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogThunk());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <button onClick={() => handleEdit(item)} className='btn btn-primary'>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
