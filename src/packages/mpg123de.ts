/**
 * **mpg123.de** - Package from pantry: mpg123.de
 *
 * @domain `mpg123.de`
 *
 * @install `launchpad install mpg123.de`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mpg123de
 * console.log(pkg.name)        // "mpg123.de"
 * console.log(pkg.description) // "Package from pantry: mpg123.de"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mpg123-de.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpg123dePackage = {
  /**
   * The display name of this package.
   */
  name: 'mpg123.de' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mpg123.de' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mpg123.de' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mpg123.de' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mpg123.de/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Mpg123dePackage = typeof mpg123dePackage
