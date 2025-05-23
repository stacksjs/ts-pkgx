export const portaudiocomPackage = {
  name: 'PortAudio' as const,
  domain: 'portaudio.com' as const,
  description: 'PortAudio is a cross-platform, open-source C language library for real-time audio input and output.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/portaudio.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +portaudio.com -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '19.7.0',
  ] as const,
  fullPath: 'portaudio.com' as const,
}

export type PortaudiocomPackage = typeof portaudiocomPackage
