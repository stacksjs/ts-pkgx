/**
 * **coder.com** - Package from pantry: coder.com
 *
 * @domain `coder.com`
 *
 * @install `launchpad install coder.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.codercom
 * console.log(pkg.name)        // "coder.com"
 * console.log(pkg.description) // "Package from pantry: coder.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/coder-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'coder.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'coder.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: coder.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install coder.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +coder.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install coder.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/coder.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CodercomPackage = typeof codercomPackage
