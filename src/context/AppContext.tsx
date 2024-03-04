import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { IArtist } from '../components/artists/Artist';
import api from '../utils/api';

interface IAppContext {
  songs: IArtist[];
  isLoading: boolean;
  onGetSongs: () => void
}

export const AppContext = createContext<IAppContext>({
  songs: [],
  isLoading: true,
  onGetSongs: () => { }
});

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [songs, setSongs] = useState<IArtist[]>([])

  const onGetSongs = async () => {
    const zoneId = window.location.hash || process.env.REACT_APP_ZONE_ID;
    if (zoneId) {
      setIsLoading(true);
      const url = `https://radio.api.soundtrackyourbrand.com/sound_zones/${zoneId}/history_tracks/latest`;
      const songs = await api(url);
      setSongs(songs);
      setIsLoading(false);
    } else {
      throw new Error('ScrobbleApi must be instantiated with a valid zoneId')
    }
  }

  useEffect(() => {
    onGetSongs();
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, songs, onGetSongs }}>
      {children}
    </AppContext.Provider>
  );
};