/**
 * **aux4.io** - Package from pantry: aux4.io
 *
 * @domain `aux4.io`
 *
 * @install `launchpad install aux4.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.aux4io
 * console.log(pkg.name)        // "aux4.io"
 * console.log(pkg.description) // "Package from pantry: aux4.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aux4-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aux4ioPackage = {
  /**
   * The display name of this package.
   */
  name: 'aux4.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aux4.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: aux4.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aux4.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aux4.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aux4.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aux4.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Aux4ioPackage = typeof aux4ioPackage
