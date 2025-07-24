/**
 * **halibut** - Package from pantry: chiark.greenend.org.uk/halibut
 *
 * @domain `chiark.greenend.org.uk/halibut`
 *
 * @install `launchpad install chiark.greenend.org.uk/halibut`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.chiarkgreenendorgukhalibut
 * console.log(pkg.name)        // "halibut"
 * console.log(pkg.description) // "Package from pantry: chiark.greenend.org.uk/hal..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/chiark-greenend-org-uk/halibut.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const chiarkgreenendorgukhalibutPackage = {
  /**
   * The display name of this package.
   */
  name: 'halibut' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'chiark.greenend.org.uk/halibut' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: chiark.greenend.org.uk/halibut' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install chiark.greenend.org.uk/halibut' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +chiark.greenend.org.uk/halibut -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install chiark.greenend.org.uk/halibut' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/chiark.greenend.org.uk/halibut/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ChiarkgreenendorgukhalibutPackage = typeof chiarkgreenendorgukhalibutPackage
