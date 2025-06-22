/**
 * **fblog** - Package from pantry: crates.io/fblog
 *
 * @domain `crates.io/fblog`
 *
 * @install `launchpad install crates.io/fblog`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiofblog
 * console.log(pkg.name)        // "fblog"
 * console.log(pkg.description) // "Package from pantry: crates.io/fblog"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/fblog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiofblogPackage = {
  /**
   * The display name of this package.
   */
  name: 'fblog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/fblog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/fblog' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/fblog' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/fblog -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/fblog' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fblog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiofblogPackage = typeof cratesiofblogPackage
