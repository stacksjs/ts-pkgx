/**
 * **mergiraf.org** - Package from pantry: mergiraf.org
 *
 * @domain `mergiraf.org`
 *
 * @install `launchpad install mergiraf.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mergiraforg
 * console.log(pkg.name)        // "mergiraf.org"
 * console.log(pkg.description) // "Package from pantry: mergiraf.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mergiraf-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mergiraforgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mergiraf.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mergiraf.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mergiraf.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mergiraf.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mergiraf.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mergiraf.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mergiraf.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MergiraforgPackage = typeof mergiraforgPackage
