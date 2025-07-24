/**
 * **sanitize** - Package from pantry: crates.io/sanitize
 *
 * @domain `crates.io/sanitize`
 *
 * @install `launchpad install crates.io/sanitize`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiosanitize
 * console.log(pkg.name)        // "sanitize"
 * console.log(pkg.description) // "Package from pantry: crates.io/sanitize"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sanitize.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiosanitizePackage = {
  /**
   * The display name of this package.
   */
  name: 'sanitize' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sanitize' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/sanitize' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/sanitize' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/sanitize -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/sanitize' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/sanitize/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiosanitizePackage = typeof cratesiosanitizePackage
