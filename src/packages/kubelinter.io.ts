export const kubelinterioPackage = {
  name: 'kube-linter' as const,
  domain: 'kubelinter.io' as const,
  description: 'KubeLinter is a static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kubelinter.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) kube-linter' as const,
  programs: [
    'kube-linter',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.8',
  ] as const,
  fullPath: 'kubelinter.io' as const,
  aliases: [
    'kube-linter',
  ] as const,
}

export type KubelinterioPackage = typeof kubelinterioPackage
