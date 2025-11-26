import clsx from "clsx";
import type { TrackListItemResource } from "../dal/api";
import styles from './TrackList.module.css';

type Props = {
    isSelected: boolean;
    onSelect: (trackId: string) => void;
    track: TrackListItemResource
}

const TrackItem = ({onSelect, track, isSelected}: Props) => {
    const handleClick = () => onSelect?.(track.id)

    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
    })
    return (
        <div>
            <li key={track.id} style={{
                border: isSelected ? '1px solid orange' : 'none'
            }}>
                <div onClick={handleClick}>
                {track.attributes.title}
                </div>
                <audio src={track.attributes.attachments[0].url} controls></audio>
            </li>
        </div>
    )
}

export default TrackItem;