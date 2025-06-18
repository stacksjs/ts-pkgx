/**
 * **capstone-engine.org** - Package from pantry: capstone-engine.org
 *
 * @domain `capstone-engine.org`
 *
 * @install `launchpad install capstone-engine.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.capstoneengineorg
 * console.log(pkg.name)        // "capstone-engine.org"
 * console.log(pkg.description) // "Package from pantry: capstone-engine.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/capstone-engine-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const capstoneengineorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'capstone-engine.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'capstone-engine.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: capstone-engine.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install capstone-engine.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/capstone-engine.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CapstoneengineorgPackage = typeof capstoneengineorgPackage
