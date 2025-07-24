/**
 * **samply** - pkgx package
 *
 * @domain `crates.io/samply`
 *
 * @install `launchpad install crates.io/samply`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosamply
 * console.log(pkg.name)        // "samply"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/samply.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosamplyPackage = {
  /**
   * The display name of this package.
   */
  name: 'samply' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/samply' as const,
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
  installCommand: 'launchpad install crates.io/samply' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/samply -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/samply' as const,
}

export type CratesiosamplyPackage = typeof cratesiosamplyPackage
