import PropTypes from 'prop-types';
import styles from './Profile.module.css';
const Profile = ({ firstName, lastName, age, image, phone, email, gender, address }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img className={styles.img} src={image} alt='profile' />
        <h3 className={styles.title}>
          {firstName} {lastName}
        </h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>
          Address: {address.city} {address.address}
        </p>
        <button className={styles.btn_profile}>EDIT</button>
      </div>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
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