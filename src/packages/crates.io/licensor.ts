/**
 * **licensor** - Package from pantry: crates.io/licensor
 *
 * @domain `crates.io/licensor`
 *
 * @install `launchpad install crates.io/licensor`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiolicensor
 * console.log(pkg.name)        // "licensor"
 * console.log(pkg.description) // "Package from pantry: crates.io/licensor"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/licensor.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiolicensorPackage = {
  /**
   * The display name of this package.
   */
  name: 'licensor' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/licensor' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/licensor' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/licensor' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/licensor -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/licensor' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/licensor/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiolicensorPackage = typeof cratesiolicensorPackage
