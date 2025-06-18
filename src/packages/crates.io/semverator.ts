/**
 * **semverator** - pkgx package
 *
 * @domain `crates.io/semverator`
 * @programs `semverator`
 * @version `0.10.1` (19 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install semverator`
 * @name `semverator`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.semverator
 * // Or access via domain
 * const samePkg = pantry.cratesiosemverator
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "semverator"
 * console.log(pkg.programs)    // ["semverator"]
 * console.log(pkg.versions[0]) // "0.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/semverator.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const semveratorPackage = {
  /**
   * The display name of this package.
   */
  name: 'semverator' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/semverator' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/semverator/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install semverator' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'semverator',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.1',
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.0',
    '0.5.1',
    '0.4.3',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.1',
    '0.3.0',
    '0.2.2',
    '0.2.1',
    '0.2.0',
    '0.1.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type SemveratorPackage = typeof semveratorPackage
