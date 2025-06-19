/**
 * **libunibreak** - The libunibreak library
 *
 * @domain `github.com/adah1972/libunibreak`
 * @version `6.1.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/adah1972/libunibreak -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomadah1972libunibreak
 * console.log(pkg.name)        // "libunibreak"
 * console.log(pkg.description) // "The libunibreak library"
 * console.log(pkg.versions[0]) // "6.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adah1972/libunibreak.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomadah1972libunibreakPackage = {
  /**
   * The display name of this package.
   */
  name: 'libunibreak' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adah1972/libunibreak' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The libunibreak library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adah1972/libunibreak/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/adah1972/libunibreak -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.1.0',
    '6.0.0',
    '5.1.0',
  ] as const,
  aliases: [] as const,
}

export type Githubcomadah1972libunibreakPackage = typeof githubcomadah1972libunibreakPackage
