export const sdkmanioPackage = {
  name: 'sdkman-init.sh' as const,
  domain: 'sdkman.io' as const,
  description: 'The SDKMAN! Command Line Interface' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sdkman.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) sdkman-init.sh' as const,
  programs: [
    'sdkman-init.sh',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '5.19.0',
    '5.18.2',
  ] as const,
  fullPath: 'sdkman.io' as const,
  aliases: [
    'sdkman-init.sh',
  ] as const,
}

export type SdkmanioPackage = typeof sdkmanioPackage
