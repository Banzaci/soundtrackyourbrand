import { useEffect, useState } from "react";
import Artist from "./Artist";
import { useAppContext } from "../../context/AppContext";

const Artists = () => {
  const { isLoading, songs } = useAppContext();
  const renderSongs = songs.map(Artist);
  const [fade, setFade] = useState('');
  useEffect(() => {
    if (isLoading) {
      setFade('fade-out')
    } else {
      setFade('fade-in')
    }
  }, [isLoading])
  return (
    <div className={`artists ${fade}`}>
      {renderSongs}
    </div>
  );
}

export default Artists;
