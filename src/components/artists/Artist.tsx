import timeAgo from '../../utils/time-ago';

interface IArtistDetails {
  name: string;
  uri: string;
}

interface IColors {
  primary: string;
  accent: string;
}

export interface IArtist {
  id: string;
  uri: string,
  song_name: string,
  artists: IArtistDetails[],
  image_url: string,
  colors: IColors,
  created_at: string;
}

function Artist(props: IArtist) {
  const { id, song_name, artists, image_url, colors, created_at } = props;
  const { primary } = colors;
  const time = timeAgo(created_at);
  const renderArtist = artists.map(({ name, uri }) => (
    <a key={uri} target='_blank' rel="noreferrer" href={`https://open.spotify.com/track/${uri}`} className='artist-body__history-link'>{name}</a>
  ))
  return (
    <div key={id} className="artist" style={{ backgroundColor: primary, padding: 4 }}>
      <img src={image_url} alt={song_name} className='artist-thumb' />
      <div className='artist-body'>
        <div className='artist-body__time'>{time}</div>
        <h2>{song_name}</h2>
        <div className='artist-body__history'>{renderArtist}</div>
      </div>
    </div>
  );
}

export default Artist;
