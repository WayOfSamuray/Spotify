import TrackItem from "./TrackItem";
import { useTracks } from "../bll/useTracks";


type Props = {
  selectedTrackId: string | null;
  onTrackSelect: (id: string | null) => void;
}

const TrackList = ({selectedTrackId, onTrackSelect}: Props) => {
  const {tracks} = useTracks()

        if (tracks === null) {
    return (
      <div>
        <span>loading...</span>
      </div>
    );
  }

  const handleResetClick = () => {
    onTrackSelect?.(null);
  }
  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId)
  }

    return (
        <div>
          <button onClick={handleResetClick} >reset</button>
          <hr />
          <ul>
            {tracks.map((track) => {
              return (
                <TrackItem key={track.id}
                track={track}
                isSelected={track.id === selectedTrackId}
                onSelect={handleClick}
                />
              )
            })}
          </ul>
        </div>
    )
}

export default TrackList;