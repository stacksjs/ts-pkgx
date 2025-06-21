/**
 * **acl** - Package from pantry: savannah.nongnu.org/acl
 *
 * @domain `savannah.nongnu.org/acl`
 *
 * @install `launchpad install savannah.nongnu.org/acl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.savannahnongnuorgacl
 * console.log(pkg.name)        // "acl"
 * console.log(pkg.description) // "Package from pantry: savannah.nongnu.org/acl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/savannah-nongnu-org/acl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const savannahnongnuorgaclPackage = {
  /**
   * The display name of this package.
   */
  name: 'acl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'savannah.nongnu.org/acl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: savannah.nongnu.org/acl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install savannah.nongnu.org/acl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/savannah.nongnu.org/acl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SavannahnongnuorgaclPackage = typeof savannahnongnuorgaclPackage
