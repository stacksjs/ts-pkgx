/**
 * **attr** - Package from pantry: savannah.nongnu.org/attr
 *
 * @domain `savannah.nongnu.org/attr`
 *
 * @install `launchpad install savannah.nongnu.org/attr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.savannahnongnuorgattr
 * console.log(pkg.name)        // "attr"
 * console.log(pkg.description) // "Package from pantry: savannah.nongnu.org/attr"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/savannah-nongnu-org/attr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const savannahnongnuorgattrPackage = {
  /**
   * The display name of this package.
   */
  name: 'attr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'savannah.nongnu.org/attr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: savannah.nongnu.org/attr' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install savannah.nongnu.org/attr' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +savannah.nongnu.org/attr -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install savannah.nongnu.org/attr' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/savannah.nongnu.org/attr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SavannahnongnuorgattrPackage = typeof savannahnongnuorgattrPackage
