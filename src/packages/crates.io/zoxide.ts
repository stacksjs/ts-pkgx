/**
 * **zoxide** - Package from pantry: crates.io/zoxide
 *
 * @domain `crates.io/zoxide`
 *
 * @install `launchpad install crates.io/zoxide`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiozoxide
 * console.log(pkg.name)        // "zoxide"
 * console.log(pkg.description) // "Package from pantry: crates.io/zoxide"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/zoxide.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiozoxidePackage = {
  /**
   * The display name of this package.
   */
  name: 'zoxide' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/zoxide' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/zoxide' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/zoxide' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/zoxide -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/zoxide' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/zoxide/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiozoxidePackage = typeof cratesiozoxidePackage
