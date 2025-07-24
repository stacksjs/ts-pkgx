/**
 * **typos** - pkgx package
 *
 * @domain `crates.io/typos`
 *
 * @install `launchpad install crates.io/typos`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotypos
 * console.log(pkg.name)        // "typos"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/typos.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotyposPackage = {
  /**
   * The display name of this package.
   */
  name: 'typos' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/typos' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/typos' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/typos -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/typos' as const,
}

export type CratesiotyposPackage = typeof cratesiotyposPackage
