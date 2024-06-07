//rafce
import PropTypes from 'prop-types';
const Button = ({ children }) => {
  return <button className='btn'>{children}</button>;
};

export default Button;
Button.propTypes = {
  children: PropTypes.node,
};
