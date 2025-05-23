export const itstoolorgPackage = {
  name: 'itstool' as const,
  domain: 'itstool.org' as const,
  description: 'Translate XML with PO files using W3C Internationalization Tag Set rules' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/itstool.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) itstool' as const,
  programs: [
    'itstool',
  ] as const,
  companions: [] as const,
  dependencies: [
    'gnome.org/libxml2',
    'python.org~3.11',
  ] as const,
  versions: [
    '2.0.7',
  ] as const,
  fullPath: 'itstool.org' as const,
}

export type ItstoolorgPackage = typeof itstoolorgPackage
