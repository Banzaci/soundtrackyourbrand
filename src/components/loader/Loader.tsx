import { useAppContext } from '../../context/AppContext';
import './loader.css';

const Loader = () => {
  const { isLoading } = useAppContext();
  if (!isLoading) return null
  return (
    <div className="loader-container">
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );
}

export default Loader;
