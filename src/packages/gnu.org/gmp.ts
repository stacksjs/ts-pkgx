/**
 * **gmp** - pkgx package
 *
 * @domain `gnu.org/gmp`
 * @version `6.3.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnu.org/gmp -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggmp
 * console.log(pkg.name)        // "gmp"
 * console.log(pkg.versions[0]) // "6.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gmp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggmpPackage = {
  /**
   * The display name of this package.
   */
  name: 'gmp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gmp' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gmp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +gnu.org/gmp -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.3.0',
    '6.2.1',
  ] as const,
  aliases: [] as const,
}

export type GnuorggmpPackage = typeof gnuorggmpPackage
