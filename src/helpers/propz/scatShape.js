import PropTypes from 'prop-types';

const scatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  sampleName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  animal: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});


export default { scatShape };
