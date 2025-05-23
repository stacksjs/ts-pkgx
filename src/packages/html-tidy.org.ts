export const htmltidyorgPackage = {
  name: 'tidy' as const,
  domain: 'html-tidy.org' as const,
  description: 'The granddaddy of HTML tools, with support for modern standards' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/html-tidy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) tidy' as const,
  programs: [
    'tidy',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    '5.8.0',
  ] as const,
  fullPath: 'html-tidy.org' as const,
  aliases: [
    'tidy',
  ] as const,
}

export type HtmltidyorgPackage = typeof htmltidyorgPackage
