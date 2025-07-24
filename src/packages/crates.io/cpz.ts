/**
 * **cpz** - Package from pantry: crates.io/cpz
 *
 * @domain `crates.io/cpz`
 *
 * @install `launchpad install crates.io/cpz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiocpz
 * console.log(pkg.name)        // "cpz"
 * console.log(pkg.description) // "Package from pantry: crates.io/cpz"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/cpz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiocpzPackage = {
  /**
   * The display name of this package.
   */
  name: 'cpz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/cpz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/cpz' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/cpz' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/cpz -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/cpz' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/cpz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiocpzPackage = typeof cratesiocpzPackage
