/**
 * **d2lang.com** - Package from pantry: d2lang.com
 *
 * @domain `d2lang.com`
 *
 * @install `launchpad install d2lang.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.d2langcom
 * console.log(pkg.name)        // "d2lang.com"
 * console.log(pkg.description) // "Package from pantry: d2lang.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/d2lang-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const d2langcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'd2lang.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'd2lang.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: d2lang.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install d2lang.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +d2lang.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install d2lang.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/d2lang.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type D2langcomPackage = typeof d2langcomPackage
