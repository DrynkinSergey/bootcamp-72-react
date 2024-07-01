import moment from 'moment/moment';

export const Transaction = ({ transaction }) => {
  const { comment, sum, type, category, createdAt } = transaction;
  return (
    <tr>
      <td>{moment(createdAt).format('DD.MM.YYYY')}</td>
      <td>{comment}</td>
      <td>{sum}</td>
      <td>{type}</td>
      <td>{category}</td>
      <td>
        <button>Edit</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};
