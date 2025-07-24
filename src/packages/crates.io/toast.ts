/**
 * **toast** - pkgx package
 *
 * @domain `crates.io/toast`
 *
 * @install `launchpad install crates.io/toast`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiotoast
 * console.log(pkg.name)        // "toast"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/toast.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotoastPackage = {
  /**
   * The display name of this package.
   */
  name: 'toast' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/toast' as const,
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
  installCommand: 'launchpad install crates.io/toast' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/toast -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/toast' as const,
}

export type CratesiotoastPackage = typeof cratesiotoastPackage
