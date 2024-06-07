import PropTypes from 'prop-types';

const Message = ({ author, text, isImportant }) => {
  return (
    <div>
      <h3>{author}</h3>
      <p>{text.toUpperCase()}</p>
    </div>
  );
};

export default Message;

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isImportant: PropTypes.bool,
};
