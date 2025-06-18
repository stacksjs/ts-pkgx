/**
 * **libisl.sourceforge.io** - pkgx package
 *
 * @domain `libisl.sourceforge.io`
 * @version `0.27.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +libisl.sourceforge.io -- $SHELL -i`
 * @dependencies `gnu.org/gmp^6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libislsourceforgeio
 * console.log(pkg.name)        // "libisl.sourceforge.io"
 * console.log(pkg.versions[0]) // "0.27.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libisl-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libislsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libisl.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libisl.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libisl.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +libisl.sourceforge.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gmp^6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.27.0',
    '0.26.0',
  ] as const,
  aliases: [] as const,
}

export type LibislsourceforgeioPackage = typeof libislsourceforgeioPackage
