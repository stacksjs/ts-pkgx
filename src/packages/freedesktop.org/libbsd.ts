/**
 * **libbsd** - Package from pantry: freedesktop.org/libbsd
 *
 * @domain `freedesktop.org/libbsd`
 *
 * @install `launchpad install freedesktop.org/libbsd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporglibbsd
 * console.log(pkg.name)        // "libbsd"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/libbsd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/libbsd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporglibbsdPackage = {
  /**
   * The display name of this package.
   */
  name: 'libbsd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/libbsd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/libbsd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/libbsd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/libbsd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/libbsd' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/libbsd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporglibbsdPackage = typeof freedesktoporglibbsdPackage
