import { FC, useEffect, useState, useMemo } from "react";
import Artist from "./Artist";
import { useAppContext } from "../../context/AppContext";

const Artists: FC = (): JSX.Element => {
  const { isLoading, songs } = useAppContext();
  const renderSongs = useMemo(() => songs.map(Artist), [songs]);
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
