/**
 * **sk** - Fuzzy Finder in rust!
 *
 * @domain `crates.io/skim`
 * @programs `sk`
 * @version `0.18.0` (24 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sk`
 * @aliases `sk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sk
 * // Or access via domain
 * const samePkg = pantry.cratesioskim
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "skim"
 * console.log(pkg.description) // "Fuzzy Finder in rust!"
 * console.log(pkg.programs)    // ["sk"]
 * console.log(pkg.versions[0]) // "0.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/skim.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const skPackage = {
  /**
   * The display name of this package.
   */
  name: 'skim' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/skim' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fuzzy Finder in rust!' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/skim/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install sk' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sk',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.0',
    '0.17.3',
    '0.17.2',
    '0.17.1',
    '0.17.0',
    '0.16.2',
    '0.16.1',
    '0.16.0',
    '0.15.7',
    '0.15.6',
    '0.15.5',
    '0.15.4',
    '0.15.3',
    '0.15.2',
    '0.15.1',
    '0.15.0',
    '0.14.4',
    '0.14.3',
    '0.13.0',
    '0.12.0',
    '0.11.12',
    '0.11.11',
    '0.11.10',
    '0.10.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sk',
  ] as const,
}

export type SkPackage = typeof skPackage
