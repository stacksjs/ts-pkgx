/**
 * **c-ares.org** - Package from pantry: c-ares.org
 *
 * @domain `c-ares.org`
 *
 * @install `launchpad install c-ares.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.caresorg
 * console.log(pkg.name)        // "c-ares.org"
 * console.log(pkg.description) // "Package from pantry: c-ares.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/c-ares-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const caresorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'c-ares.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'c-ares.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: c-ares.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install c-ares.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/c-ares.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CaresorgPackage = typeof caresorgPackage
