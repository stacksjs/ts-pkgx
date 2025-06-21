/**
 * **trufflehog** - Package from pantry: trufflesecurity.com/trufflehog
 *
 * @domain `trufflesecurity.com/trufflehog`
 *
 * @install `launchpad install trufflesecurity.com/trufflehog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.trufflesecuritycomtrufflehog
 * console.log(pkg.name)        // "trufflehog"
 * console.log(pkg.description) // "Package from pantry: trufflesecurity.com/truffl..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/trufflesecurity-com/trufflehog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const trufflesecuritycomtrufflehogPackage = {
  /**
   * The display name of this package.
   */
  name: 'trufflehog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'trufflesecurity.com/trufflehog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: trufflesecurity.com/trufflehog' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install trufflesecurity.com/trufflehog' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/trufflesecurity.com/trufflehog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TrufflesecuritycomtrufflehogPackage = typeof trufflesecuritycomtrufflehogPackage
