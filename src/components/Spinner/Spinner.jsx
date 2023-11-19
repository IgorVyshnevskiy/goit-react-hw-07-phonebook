import { RotatingLines } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div style={styles}>
      <RotatingLines strokeColor="#f27b77" />
    </div>
  );
};
export default Spinner;

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
