export const UserRight = {
  ALL: 0,

  MANAGE_USERS: 1,

  MANAGE_SERVER_FOLLOW: 2,

  MANAGE_LOGS: 3,

  MANAGE_DEBUG: 4,

  MANAGE_SERVER_REDUNDANCY: 5,

  MANAGE_ABUSES: 6,

  MANAGE_JOBS: 7,

  MANAGE_CONFIGURATION: 8,
  MANAGE_INSTANCE_CUSTOM_PAGE: 9,

  MANAGE_ACCOUNTS_BLOCKLIST: 10,
  MANAGE_SERVERS_BLOCKLIST: 11,

  MANAGE_VIDEO_BLACKLIST: 12,
  MANAGE_ANY_VIDEO_CHANNEL: 13,

  REMOVE_ANY_VIDEO: 14,
  REMOVE_ANY_VIDEO_PLAYLIST: 15,
  MANAGE_ANY_VIDEO_COMMENT: 16,

  UPDATE_ANY_VIDEO: 17,
  UPDATE_ANY_VIDEO_PLAYLIST: 18,

  GET_ANY_LIVE: 19,
  SEE_ALL_VIDEOS: 20,
  SEE_ALL_COMMENTS: 21,
  CHANGE_VIDEO_OWNERSHIP: 22,

  MANAGE_PLUGINS: 23,

  MANAGE_VIDEOS_REDUNDANCIES: 24,

  MANAGE_VIDEO_FILES: 25,
  RUN_VIDEO_TRANSCODING: 26,

  MANAGE_VIDEO_IMPORTS: 27,

  MANAGE_REGISTRATIONS: 28,

  MANAGE_RUNNERS: 29,

  MANAGE_USER_EXPORTS: 30,
  MANAGE_USER_IMPORTS: 31,

  MANAGE_INSTANCE_WATCHED_WORDS: 32,
  MANAGE_INSTANCE_AUTO_TAGS: 33
} as const

export type UserRightType = typeof UserRight[keyof typeof UserRight]
