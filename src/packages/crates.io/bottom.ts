/**
 * **bottom** - Package from pantry: crates.io/bottom
 *
 * @domain `crates.io/bottom`
 *
 * @install `launchpad install crates.io/bottom`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiobottom
 * console.log(pkg.name)        // "bottom"
 * console.log(pkg.description) // "Package from pantry: crates.io/bottom"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bottom.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiobottomPackage = {
  /**
   * The display name of this package.
   */
  name: 'bottom' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bottom' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/bottom' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/bottom' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/bottom -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/bottom' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bottom/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiobottomPackage = typeof cratesiobottomPackage
