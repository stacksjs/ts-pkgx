export const githubcomlicenseelicensedPackage = {
  name: 'github.com/licensee/licensed' as const,
  domain: 'github.com/licensee/licensed' as const,
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/licensee/licensed/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/licensee/licensed -- $SHELL -i' as const,
  programs: [] as const,
  companions: [
    'linux',
  ] as const,
  dependencies: [
    'ruby-lang.org^3.1',
    'rubygems.org',
    'linuxgnome.org/libxml2~2.13.8gnome.org/libxslt~1.1.43pcre.org@8',
    'gnome.org/libxml2~2.13.8',
    'gnome.org/libxslt~1.1.43',
    'pcre.org@8',
  ] as const,
  versions: [
    '5.0.4',
  ] as const,
  fullPath: 'github.com/licensee/licensed' as const,
  aliases: [
    'licensee/licensed',
  ] as const,
}

export type GithubcomlicenseelicensedPackage = typeof githubcomlicenseelicensedPackage
