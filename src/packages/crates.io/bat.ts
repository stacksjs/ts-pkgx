/**
 * **bat** - Package from pantry: crates.io/bat
 *
 * @domain `crates.io/bat`
 *
 * @install `launchpad install crates.io/bat`
 * @dependencies `zlib.net^1`, `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiobat
 * console.log(pkg.name)        // "bat"
 * console.log(pkg.description) // "Package from pantry: crates.io/bat"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiobatPackage = {
  /**
   * The display name of this package.
   */
  name: 'bat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/bat' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/bat' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/bat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/bat' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiobatPackage = typeof cratesiobatPackage
