import ProgressBar from 'react-bootstrap/ProgressBar';
import { UseUserContext } from '../context/UserContext';

function WithLabelExample() {
    const {percent} = UseUserContext()
  
  return <ProgressBar now={percent} />;
}

export default WithLabelExample;