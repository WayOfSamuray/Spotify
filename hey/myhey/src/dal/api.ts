export type GetTrackDetailOutputData = {
  id: string;
  attributes: {
    title: string;
    lyrics: string | null;
  }
}

type AttachmentDto = {
    url: string;
}

type TrackListItemResourceAttributes = {
    title: string;
    attachments: Array<AttachmentDto>
}

export type TrackListItemResource = {
  id: string;
  attributes: TrackListItemResourceAttributes
}

export const getTrack = (trackId: string) => {
    const promise: Promise<{data: GetTrackDetailOutputData}> = fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" + trackId,
      {
        headers: {
          "api-key": "5b264b49-bf32-40e4-9f43-acf03a2ca3e0",
        },
      }).then((res) => res.json())

    return promise
}


export const getTracks = () => {
    return fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
          headers: {
            "api-key": "5b264b49-bf32-40e4-9f43-acf03a2ca3e0",
          },
        })
          .then((res) => res.json())
}