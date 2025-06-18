/**
 * **cfssl.org** - Package from pantry: cfssl.org
 *
 * @domain `cfssl.org`
 *
 * @install `launchpad install cfssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cfsslorg
 * console.log(pkg.name)        // "cfssl.org"
 * console.log(pkg.description) // "Package from pantry: cfssl.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cfssl-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cfsslorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cfssl.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cfssl.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cfssl.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install cfssl.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cfssl.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CfsslorgPackage = typeof cfsslorgPackage
