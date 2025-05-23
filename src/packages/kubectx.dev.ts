export const kubectxdevPackage = {
  name: 'kube' as const,
  domain: 'kubectx.dev' as const,
  description: 'Tool that can switch between kubectl contexts easily and create aliases' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubectx.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +kubectx.dev -- $SHELL -i' as const,
  programs: [
    'kubectx',
    'kubens',
  ] as const,
  companions: [] as const,
  dependencies: [
    'github.com/junegunn/fzf',
  ] as const,
  versions: [
    '0.9.5',
    '0.9.4',
  ] as const,
  fullPath: 'kubectx.dev' as const,
}

export type KubectxdevPackage = typeof kubectxdevPackage
