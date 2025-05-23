export const streamlinkgithubioPackage = {
  name: 'streamlink' as const,
  domain: 'streamlink.github.io' as const,
  description: 'Streamlink is a CLI utility which pipes video streams from various services into a video player' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/streamlink.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) streamlink' as const,
  programs: [
    'streamlink',
  ] as const,
  companions: [
    'ffmpeg.org',
  ] as const,
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [
    '7.3.0',
    '7.2.0',
    '7.1.3',
    '7.1.2',
    '7.1.1',
    '7.1.0',
    '7.0.0',
    '6.11.0',
    '6.10.0',
    '6.9.0',
    '6.8.3',
    '6.8.2',
    '6.8.1',
    '6.8.0',
    '6.7.4',
    '6.7.3',
    '6.7.2',
    '6.7.1',
    '6.7.0',
  ] as const,
  fullPath: 'streamlink.github.io' as const,
}

export type StreamlinkgithubioPackage = typeof streamlinkgithubioPackage
