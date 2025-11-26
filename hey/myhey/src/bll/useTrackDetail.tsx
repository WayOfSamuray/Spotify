import { useEffect, useState } from "react";
import { getTrack, type GetTrackDetailOutputData } from "../dal/api";

export const useTrackDetail = (trackId: string | null) => {
    const [trackDetails, setTrackDetails] = useState<GetTrackDetailOutputData | null>(null);

  useEffect(() => {
    if (!trackId) {
      setTrackDetails(null)
      return;
    }
    const promise = getTrack(trackId);
      promise.then((json) => setTrackDetails(json.data));
  }, [trackId]);
  return {trackDetails}
}