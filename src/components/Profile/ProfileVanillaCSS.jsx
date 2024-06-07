import PropTypes from 'prop-types';
import './Profile.css';
const ProfileVanillaCSS = ({ firstName, lastName, age, image, phone, email, gender, address }) => {
  return (
    <div className='wrapper'>
      <div className='card'>
        <img className='img' src={image} alt='profile' />
        <h3 className='title'>
          {firstName} {lastName}
        </h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>
          Address: {address.city} {address.address}
        </p>
      </div>
    </div>
  );
};

export default ProfileVanillaCSS;

ProfileVanillaCSS.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gender: PropTypes.oneOf(['male', 'female', 'other']).isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};
