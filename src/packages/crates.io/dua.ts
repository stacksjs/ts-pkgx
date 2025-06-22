/**
 * **dua** - Package from pantry: crates.io/dua
 *
 * @domain `crates.io/dua`
 *
 * @install `launchpad install crates.io/dua`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiodua
 * console.log(pkg.name)        // "dua"
 * console.log(pkg.description) // "Package from pantry: crates.io/dua"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/dua.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioduaPackage = {
  /**
   * The display name of this package.
   */
  name: 'dua' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/dua' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/dua' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/dua' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/dua -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/dua' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/dua/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioduaPackage = typeof cratesioduaPackage
