import styles from "./Notification.module.scss";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

Notification.defaultProps = {
  message: "",
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
