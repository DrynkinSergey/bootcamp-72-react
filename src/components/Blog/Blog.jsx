import { useDispatch } from 'react-redux';
import BlogForm from './BlogForm';
import List from './List';
import { editBlogThunk, postBlogThunk } from '../../redux/blogOperations';
import { useState } from 'react';

const Blog = () => {
  const dispatch = useDispatch();
  const [editFields, setEditFields] = useState();

  const handleSubmit = (data, options) => {
    console.log(data);
    if (editFields) {
      data.id = editFields.id;
      dispatch(editBlogThunk(data));
      setEditFields();
    } else {
      dispatch(postBlogThunk(data));
    }
    options.resetForm();
  };

  const handleEdit = item => {
    setEditFields(item);
  };
  const initialValues = editFields
    ? { title: editFields.title, body: editFields.body }
    : {
        title: '',
        body: '',
      };
  return (
    <div>
      <BlogForm isEdit={!!editFields} handleSubmit={handleSubmit} initialValues={initialValues} />
      <List handleEdit={handleEdit} />
    </div>
  );
};
export default Blog;
