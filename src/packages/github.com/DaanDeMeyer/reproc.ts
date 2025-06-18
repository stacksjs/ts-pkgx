/**
 * **github.com/daandemeyer/reproc** - A cross-platform (C99/C++11) process library
 *
 * @domain `github.com/DaanDeMeyer/reproc`
 * @version `14.2.5` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/DaanDeMeyer/reproc -- $SHELL -i`
 * @aliases `github.com/daandemeyer/reproc`, `DaanDeMeyer/reproc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomdaandemeyerreproc
 * // Or access via domain
 * const samePkg = pantry.githubcomdaandemeyerreproc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/DaanDeMeyer/reproc"
 * console.log(pkg.description) // "A cross-platform (C99/C++11) process library"
 * console.log(pkg.versions[0]) // "14.2.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/DaanDeMeyer/reproc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdaandemeyerreprocPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/DaanDeMeyer/reproc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/DaanDeMeyer/reproc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A cross-platform (C99/C++11) process library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/DaanDeMeyer/reproc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/DaanDeMeyer/reproc -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '14.2.5',
    '14.2.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/daandemeyer/reproc',
    'DaanDeMeyer/reproc',
  ] as const,
  fullPath: 'github.com/DaanDeMeyer/reproc' as const,
}

export type GithubcomdaandemeyerreprocPackage = typeof githubcomdaandemeyerreprocPackage
