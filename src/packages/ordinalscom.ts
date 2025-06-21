/**
 * **ordinals.com** - Package from pantry: ordinals.com
 *
 * @domain `ordinals.com`
 *
 * @install `launchpad install ordinals.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ordinalscom
 * console.log(pkg.name)        // "ordinals.com"
 * console.log(pkg.description) // "Package from pantry: ordinals.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ordinals-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ordinalscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ordinals.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ordinals.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ordinals.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ordinals.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ordinals.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OrdinalscomPackage = typeof ordinalscomPackage
