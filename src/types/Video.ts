export type Video = {
  id: number;
  channel_id: string;
  channel_title: string;
  default_thumbnail: string;
  high_thumbnail: string;
  deleted: boolean | null;
  hide: boolean | null;
  published_at: string;
  title: string;
  url: string;
  video_id: string;
}