/**
 * **aichat** - Package from pantry: crates.io/aichat
 *
 * @domain `crates.io/aichat`
 *
 * @install `launchpad install crates.io/aichat`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioaichat
 * console.log(pkg.name)        // "aichat"
 * console.log(pkg.description) // "Package from pantry: crates.io/aichat"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/aichat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioaichatPackage = {
  /**
   * The display name of this package.
   */
  name: 'aichat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/aichat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/aichat' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/aichat' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/aichat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/aichat' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/aichat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioaichatPackage = typeof cratesioaichatPackage
