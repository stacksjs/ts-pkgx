/**
 * **oci2git** - Package from pantry: github.com/Virviil/oci2git
 *
 * @domain `github.com/Virviil/oci2git`
 *
 * @install `launchpad install github.com/Virviil/oci2git`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomvirviiloci2git
 * console.log(pkg.name)        // "oci2git"
 * console.log(pkg.description) // "Package from pantry: github.com/Virviil/oci2git"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Virviil/oci2git.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomvirviiloci2gitPackage = {
  /**
   * The display name of this package.
   */
  name: 'oci2git' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Virviil/oci2git' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Virviil/oci2git' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Virviil/oci2git' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Virviil/oci2git -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Virviil/oci2git' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Virviil/oci2git/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomvirviiloci2gitPackage = typeof githubcomvirviiloci2gitPackage
