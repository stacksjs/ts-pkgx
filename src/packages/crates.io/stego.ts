/**
 * **stego** - pkgx package
 *
 * @domain `crates.io/stego`
 *
 * @install `launchpad install crates.io/stego`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiostego
 * console.log(pkg.name)        // "stego"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/stego.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiostegoPackage = {
  /**
   * The display name of this package.
   */
  name: 'stego' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/stego' as const,
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
  installCommand: 'launchpad install crates.io/stego' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/stego -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/stego' as const,
}

export type CratesiostegoPackage = typeof cratesiostegoPackage
