/**
 * **eza** - Modern, maintained replacement for ls
 *
 * @domain `crates.io/eza`
 * @programs `eza`
 * @version `0.21.5` (78 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install eza`
 * @name `eza`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.eza
 * // Or access via domain
 * const samePkg = pantry.cratesioeza
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "eza"
 * console.log(pkg.description) // "Modern, maintained replacement for ls"
 * console.log(pkg.programs)    // ["eza"]
 * console.log(pkg.versions[0]) // "0.21.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/eza.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ezaPackage = {
  /**
   * The display name of this package.
   */
  name: 'eza' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/eza' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Modern, maintained replacement for ls' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/eza/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install eza' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eza',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.21.5',
    '0.21.4',
    '0.21.3',
    '0.21.2',
    '0.21.1',
    '0.21.0',
    '0.20.24',
    '0.20.23',
    '0.20.22',
    '0.20.21',
    '0.20.20',
    '0.20.19',
    '0.20.18',
    '0.20.17',
    '0.20.16',
    '0.20.15',
    '0.20.14',
    '0.20.13',
    '0.20.12',
    '0.20.11',
    '0.20.10',
    '0.20.9',
    '0.20.8',
    '0.20.7',
    '0.20.6',
    '0.20.5',
    '0.20.4',
    '0.20.3',
    '0.20.2',
    '0.20.1',
    '0.20.0',
    '0.19.4',
    '0.19.3',
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.24',
    '0.18.23',
    '0.18.22',
    '0.18.21',
    '0.18.20',
    '0.18.19',
    '0.18.18',
    '0.18.17',
    '0.18.16',
    '0.18.15',
    '0.18.14',
    '0.18.13',
    '0.18.11',
    '0.18.10',
    '0.18.9',
    '0.18.8',
    '0.18.7',
    '0.18.6',
    '0.18.5',
    '0.18.4',
    '0.18.3',
    '0.18.2',
    '0.18.1',
    '0.18.0',
    '0.17.3',
    '0.17.2',
    '0.17.1',
    '0.17.0',
    '0.16.3',
    '0.16.2',
    '0.16.1',
    '0.16.0',
    '0.15.3',
    '0.15.2',
    '0.15.1',
    '0.15.0',
    '0.14.2',
    '0.14.1',
    '0.14.0',
    '0.13.1',
    '0.13.0',
    '0.12.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type EzaPackage = typeof ezaPackage
