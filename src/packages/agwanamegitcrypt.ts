/**
 * Package definition for git-crypt (agwa.name)
 */
import type { PkgxPackage } from '../types'

export const agwanamegitcryptPackage: PkgxPackage = {
  name: 'git-crypt',
  domain: 'agwa.name',
  description: 'Transparent file encryption in git',
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/blob/main/projects/agwa.name/git-crypt/package.yml',
  homepageUrl: 'https://www.agwa.name/projects/git-crypt/',
  githubUrl: 'https://github.com/AGWA/git-crypt',
  installCommand: 'pkgx agwa.name/git-crypt',
  programs: ['git-crypt'],
  companions: [],
  dependencies: [],
  versions: ['0.7.0'],
  aliases: ['git-crypt'],
  fullPath: 'agwa.name/git-crypt',
}
