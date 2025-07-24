/**
 * **ripgrep-all** - pkgx package
 *
 * @domain `crates.io/ripgrep-all`
 *
 * @install `launchpad install crates.io/ripgrep-all`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioripgrepall
 * console.log(pkg.name)        // "ripgrep-all"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ripgrep-all.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioripgrepallPackage = {
  /**
   * The display name of this package.
   */
  name: 'ripgrep-all' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ripgrep-all' as const,
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
  installCommand: 'launchpad install crates.io/ripgrep-all' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/ripgrep-all -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/ripgrep-all' as const,
}

export type CratesioripgrepallPackage = typeof cratesioripgrepallPackage
