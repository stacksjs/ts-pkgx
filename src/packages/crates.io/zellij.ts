/**
 * **zellij** - Package from pantry: crates.io/zellij
 *
 * @domain `crates.io/zellij`
 *
 * @install `launchpad install crates.io/zellij`
 * @dependencies `zlib.net^1`, `curl.se@8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiozellij
 * console.log(pkg.name)        // "zellij"
 * console.log(pkg.description) // "Package from pantry: crates.io/zellij"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/zellij.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiozellijPackage = {
  /**
   * The display name of this package.
   */
  name: 'zellij' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/zellij' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/zellij' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/zellij' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/zellij -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/zellij' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'curl.se@8',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/zellij/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiozellijPackage = typeof cratesiozellijPackage
