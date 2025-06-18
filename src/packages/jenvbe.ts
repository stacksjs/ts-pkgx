/**
 * **jenv.be** - Package from pantry: jenv.be
 *
 * @domain `jenv.be`
 *
 * @install `launchpad install jenv.be`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jenvbe
 * console.log(pkg.name)        // "jenv.be"
 * console.log(pkg.description) // "Package from pantry: jenv.be"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jenv-be.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jenvbePackage = {
  /**
   * The display name of this package.
   */
  name: 'jenv.be' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jenv.be' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jenv.be' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jenv.be' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jenv.be/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JenvbePackage = typeof jenvbePackage
