/**
 * **lzip** - Package from pantry: nongnu.org/lzip
 *
 * @domain `nongnu.org/lzip`
 *
 * @install `launchpad install nongnu.org/lzip`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nongnuorglzip
 * console.log(pkg.name)        // "lzip"
 * console.log(pkg.description) // "Package from pantry: nongnu.org/lzip"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nongnu-org/lzip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nongnuorglzipPackage = {
  /**
   * The display name of this package.
   */
  name: 'lzip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nongnu.org/lzip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nongnu.org/lzip' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nongnu.org/lzip' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nongnu.org/lzip -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nongnu.org/lzip' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nongnu.org/lzip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NongnuorglzipPackage = typeof nongnuorglzipPackage
