export const hurldevPackage = {
  name: 'hurl' as const,
  domain: 'hurl.dev' as const,
  description: 'Run and Test HTTP Requests with plain text and curl' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hurl.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +hurl.dev -- $SHELL -i' as const,
  programs: [
    'hurl',
    'hurlfmt',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnome.org/libxml2',
    'curl.se',
  ] as const,
  versions: [
    '6.1.1',
    '6.1.0',
    '6.0.0',
    '5.0.1',
    '5.0.0',
    '4.3.0',
    '4.2.0',
    '4.1.0',
    '4.0.0',
  ] as const,
  fullPath: 'hurl.dev' as const,
}

export type HurldevPackage = typeof hurldevPackage
