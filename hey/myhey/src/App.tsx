import TrackList from "./components/TrackList";
import TrackDetail from "./components/TrackDetail";
import { useTrackSelection } from "./bll/useTrackSelection";

const App = () => {
  const {trackId, setTrackId} = useTrackSelection()
  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id)
  }

  return (
    <div>
      <div style={{display: 'flex', gap: '40px'}}>
      <TrackList 
      selectedTrackId={trackId}
      onTrackSelect={handleTrackSelect}
      />
      <TrackDetail trackId={trackId} />
      </div>
    </div>
  );
};

export default App;