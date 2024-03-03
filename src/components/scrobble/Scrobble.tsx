import { useAppContext } from "../../context/AppContext";

const Scrobble = () => {
  const { isLoading, onGetSongs } = useAppContext();
  return (
    <div className="scrobble">
      <button
        disabled={isLoading}
        onClick={onGetSongs}
        className="button"
      >
        {isLoading ? '...loading' : 'Add scrobble'}
      </button >
    </div>
  )
}

export default Scrobble