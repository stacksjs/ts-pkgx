export const markupsafepalletsprojectscomPackage = {
  name: 'markupsafe.palletsprojects.com' as const,
  domain: 'markupsafe.palletsprojects.com' as const,
  description: 'Safely add untrusted strings to HTML/XML markup.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/markupsafe.palletsprojects.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +markupsafe.palletsprojects.com -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.1.5',
    '2.1.4',
    '2.1.3',
  ] as const,
  fullPath: 'markupsafe.palletsprojects.com' as const,
  aliases: [] as const,
}

export type MarkupsafepalletsprojectscomPackage = typeof markupsafepalletsprojectscomPackage
