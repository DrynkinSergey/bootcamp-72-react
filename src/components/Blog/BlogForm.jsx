import { Field, Form, Formik } from 'formik';

const BlogForm = ({ handleSubmit, initialValues, isEdit }) => {
  console.log(initialValues);
  return (
    <div>
      <Formik enableReinitialize onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name='title' placeholder='Title' />
          <Field name='body' placeholder='Body' />
          <button type='submit'>{isEdit ? 'EDIT' : 'ADD'}</button>
        </Form>
      </Formik>
    </div>
  );
};
export default BlogForm;

// const BlogForm = ({ handleSubmit: submit, initialValues }) => {
//   console.log(initialValues);

//   const { register, handleSubmit } = useForm({
//     initialValues: { ...initialValues },
//   });
//   return (
//     <div>
//       <form onSubmit={handleSubmit(submit)}>
//         <input {...register('title')} placeholder='Title' />
//         <input {...register('body')} placeholder='Body' />
//         <button type='submit'>Add</button>
//       </form>
//     </div>
//   );
// };
// export default BlogForm;
