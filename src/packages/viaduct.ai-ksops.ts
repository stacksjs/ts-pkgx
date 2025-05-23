export const viaductaiksopsPackage = {
  name: 'ksops' as const,
  domain: 'viaduct.ai/ksops' as const,
  description: 'KSOPS - A Flexible Kustomize Plugin for SOPS Encrypted Resources' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/viaduct.ai/ksops/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) ksops' as const,
  programs: [
    'ksops',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '4.3.3',
    '4.3.2',
  ] as const,
  fullPath: 'viaduct.ai/ksops' as const,
  aliases: [
    'ksops',
  ] as const,
}

export type ViaductaiksopsPackage = typeof viaductaiksopsPackage
