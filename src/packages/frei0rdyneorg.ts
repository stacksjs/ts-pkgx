/**
 * **frei0r.dyne.org** - Package from pantry: frei0r.dyne.org
 *
 * @domain `frei0r.dyne.org`
 *
 * @install `launchpad install frei0r.dyne.org`
 * @dependencies `cmake.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.frei0rdyneorg
 * console.log(pkg.name)        // "frei0r.dyne.org"
 * console.log(pkg.description) // "Package from pantry: frei0r.dyne.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/frei0r-dyne-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const frei0rdyneorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'frei0r.dyne.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'frei0r.dyne.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: frei0r.dyne.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install frei0r.dyne.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/frei0r.dyne.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Frei0rdyneorgPackage = typeof frei0rdyneorgPackage
