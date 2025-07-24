/**
 * **fd-find** - Package from pantry: crates.io/fd-find
 *
 * @domain `crates.io/fd-find`
 *
 * @install `launchpad install crates.io/fd-find`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiofdfind
 * console.log(pkg.name)        // "fd-find"
 * console.log(pkg.description) // "Package from pantry: crates.io/fd-find"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fd-find.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiofdfindPackage = {
  /**
   * The display name of this package.
   */
  name: 'fd-find' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fd-find' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/fd-find' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/fd-find' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/fd-find -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/fd-find' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fd-find/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiofdfindPackage = typeof cratesiofdfindPackage
