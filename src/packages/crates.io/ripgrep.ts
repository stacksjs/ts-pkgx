/**
 * **ripgrep** - Package from pantry: crates.io/ripgrep
 *
 * @domain `crates.io/ripgrep`
 *
 * @install `launchpad install crates.io/ripgrep`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioripgrep
 * console.log(pkg.name)        // "ripgrep"
 * console.log(pkg.description) // "Package from pantry: crates.io/ripgrep"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ripgrep.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioripgrepPackage = {
  /**
   * The display name of this package.
   */
  name: 'ripgrep' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ripgrep' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/ripgrep' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/ripgrep' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/ripgrep -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/ripgrep' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioripgrepPackage = typeof cratesioripgrepPackage
