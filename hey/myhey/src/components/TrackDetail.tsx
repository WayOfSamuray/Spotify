import { useTrackDetail } from "../bll/useTrackDetail";

type Props = {
  trackId: string | null
}

const TrackDetail = ({trackId}: Props) => {
  const {trackDetails} = useTrackDetail(trackId)
  return (
    <div>
      <h2>Details</h2>
      {!trackDetails && !trackId && <div>Песня не выбрана</div>}
      {!trackDetails && trackId && 'Loading'}
      {trackDetails && trackId && trackDetails.id !== trackId && 'Loading'}
      {trackDetails && <div>
        <h3>{trackDetails.attributes.title}</h3>
        <h4>Lyrics</h4>
        <p>{trackDetails.attributes.lyrics ?? 'no lyrics'}</p>
        </div>}
    </div>
  );
};

export default TrackDetail;
