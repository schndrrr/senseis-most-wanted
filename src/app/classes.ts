export class User {
    display_name?: string;
    external_urls: { spotify: string };
    followers?: Followers;
    href: string;
    id: string;
    images?: Image[];
    type: string;
    uri: string;
}

class Followers {
    href: any;
    total: number;
}

class Image {
    height: number;
    url: string;
    width: number;
}

export class Playlist {
    collaborative: boolean;
    description: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: User;
    primary_color: string;
    public: boolean;
    snapshot_id: string;
    tracks: { 
        href: string;
        total: number;
    };
    type: string;
    uri: string;
}

export class Playlists {
    href: string;
    items: Playlist[];
    limit: number;
    next: string;
    offset: number;
    previous: any;
    total: number;
}

export class PlaylistEntry {
    added_at: string;
    added_by: User;
    is_local: boolean;
    primary_color: string;
    track: Track;
    video_thumbnail: { url: string };
}

export class Tracks {
    href: string;
    items: PlaylistEntry[];
    limit: number;
    next: string;
    offset: number;
    previous: any;
    total: number;
}

export class Track {
    album: Album[];
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: { isrc: string; };
    external_urls: { spotify: string; };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
}

export class Artist {
    external_urls: { spotify: string; };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export class Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: { spotify: string; };
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export class Recent {
    cursors: {
        after: number;
        before: number;
    }
    href: string;
    items: RecentTracks[];
    limit: number;
    next: string;
}

export class RecentTracks {
    context: {
        external_urls: {
            spotify: string;
        };
        href: string;
        type: string;
        uri: string;
    }
    played_at: string;
    track: Track;

}