/**
 * **pkg-config** - Package from pantry: freedesktop.org/pkg-config
 *
 * @domain `freedesktop.org/pkg-config`
 *
 * @install `launchpad install freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgpkgconfig
 * console.log(pkg.name)        // "pkg-config"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/pkg-config"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/pkg-config.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgpkgconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkg-config' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/pkg-config' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/pkg-config' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/pkg-config' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/pkg-config -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/pkg-config' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/pkg-config/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgpkgconfigPackage = typeof freedesktoporgpkgconfigPackage
