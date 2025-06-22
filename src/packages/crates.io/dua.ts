/**
 * **crates.io/dua** - pkgx package
 *
 * @domain `crates.io/dua`
 * @version `2.30.1` (26 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install crates.io/dua`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiodua
 * console.log(pkg.name)        // "crates.io/dua"
 * console.log(pkg.versions[0]) // "2.30.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/dua.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioduaPackage = {
  /**
   * The display name of this package.
   */
  name: 'crates.io/dua' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/dua' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/dua/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/dua' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.30.1',
    '2.30.0',
    '2.29.4',
    '2.29.3',
    '2.29.2',
    '2.29.1',
    '2.29.0',
    '2.28.0',
    '2.27.2',
    '2.27.1',
    '2.27.0',
    '2.26.0',
    '2.25.0',
    '2.24.2',
    '2.24.1',
    '2.24.0',
    '2.23.0',
    '2.22.0',
    '2.21.0',
    '2.20.3',
    '2.20.2',
    '2.20.1',
    '2.20.0',
    '2.19.2',
    '2.19.1',
    '2.19.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/dua -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/dua' as const,
}

export type CratesioduaPackage = typeof cratesioduaPackage
