/**
 * **libisl.sourceforge.io** - Package from pantry: libisl.sourceforge.io
 *
 * @domain `libisl.sourceforge.io`
 *
 * @install `launchpad install libisl.sourceforge.io`
 * @dependencies `gnu.org/gmp^6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libislsourceforgeio
 * console.log(pkg.name)        // "libisl.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: libisl.sourceforge.io"
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
  description: 'Package from pantry: libisl.sourceforge.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libisl.sourceforge.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libisl.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libisl.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gmp^6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libisl.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibislsourceforgeioPackage = typeof libislsourceforgeioPackage
