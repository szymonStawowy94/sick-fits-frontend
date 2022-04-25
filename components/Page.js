import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <h2>I am page Component</h2>
      <h2>{cool}</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
