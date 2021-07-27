export type GifListResponse = {
  pagination: {
    total_count: number
    count: number
    offset: number
  }
  meta: Metadata
  data: Gif[]
}

export type SingleGifResponse = {
  meta: Metadata
  data: Gif
}

interface Gif {
  type: Type
  id: string
  url: string
  slug: string
  bitly_gif_url: string
  bitly_url: string
  embed_url: string
  username: string
  source: string
  title: string
  rating: Rating
  content_url: string
  source_tld: string
  source_post_url: string
  is_sticker: number
  import_datetime: Date
  trending_datetime: Date | TrendingDatetimeEnum
  images: Images
  user?: User
  analytics_response_payload: string
  analytics: Analytics
}

interface Metadata {
  status: number
  msg: string
  response_id: string
}

interface Analytics {
  onload: OnClick
  onclick: OnClick
  onsent: OnClick
}

interface OnClick {
  url: string
}

interface Images {
  original: FixedHeight
  downsized: The480_WStill
  downsized_large: The480_WStill
  downsized_medium: The480_WStill
  downsized_small: The4_K
  downsized_still: The480_WStill
  fixed_height: FixedHeight
  fixed_height_downsampled: FixedHeight
  fixed_height_small: FixedHeight
  fixed_height_small_still: The480_WStill
  fixed_height_still: The480_WStill
  fixed_width: FixedHeight
  fixed_width_downsampled: FixedHeight
  fixed_width_small: FixedHeight
  fixed_width_small_still: The480_WStill
  fixed_width_still: The480_WStill
  looping: Looping
  original_still: The480_WStill
  original_mp4: The4_K
  preview: The4_K
  preview_gif: The480_WStill
  preview_webp: The480_WStill
  '480w_still': The480_WStill
  hd?: The4_K
  '4k'?: The4_K
}

interface The480_WStill {
  height: string
  width: string
  size: string
  url: string
}

interface The4_K {
  height: string
  width: string
  mp4_size: string
  mp4: string
}

interface FixedHeight {
  height: string
  width: string
  size: string
  url: string
  mp4_size?: string
  mp4?: string
  webp_size: string
  webp: string
  frames?: string
  hash?: string
}

interface Looping {
  mp4_size: string
  mp4: string
}

enum Rating {
  G = 'g',
  PG = 'pg',
}

enum TrendingDatetimeEnum {
  The00000000000000 = '0000-00-00 00:00:00',
}

enum Type {
  GIF = 'gif',
}

interface User {
  avatar_url: string
  banner_image: string
  banner_url: string
  profile_url: string
  username: string
  display_name: string
  description: string
  instagram_url: string
  website_url: string
  is_verified: boolean
}
