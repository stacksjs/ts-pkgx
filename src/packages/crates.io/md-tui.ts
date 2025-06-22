/**
 * **md-tui** - Package from pantry: crates.io/md-tui
 *
 * @domain `crates.io/md-tui`
 *
 * @install `launchpad install crates.io/md-tui`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiomdtui
 * console.log(pkg.name)        // "md-tui"
 * console.log(pkg.description) // "Package from pantry: crates.io/md-tui"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/md-tui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiomdtuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'md-tui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/md-tui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/md-tui' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/md-tui' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/md-tui -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/md-tui' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/md-tui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiomdtuiPackage = typeof cratesiomdtuiPackage
