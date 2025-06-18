/**
 * **bats** - Bash Automated Testing System
 *
 * @domain `github.com/bats-core/bats-core`
 * @programs `bats`
 * @version `1.12.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) bats`
 * @name `bats`
 * @aliases `bats-core/bats-core`
 * @dependencies `gnu.org/coreutils^9.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bats
 * // Or access via domain
 * const samePkg = pantry.githubcombatscorebatscore
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bats"
 * console.log(pkg.description) // "Bash Automated Testing System"
 * console.log(pkg.programs)    // ["bats"]
 * console.log(pkg.versions[0]) // "1.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/bats-core/bats-core.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const batsPackage = {
  /**
   * The display name of this package.
   */
  name: 'bats' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/bats-core/bats-core' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Bash Automated Testing System' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/bats-core/bats-core/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) bats' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bats',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/coreutils^9.4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.0',
    '1.11.1',
    '1.11.0',
    '1.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'bats-core/bats-core',
  ] as const,
  fullPath: 'github.com/bats-core/bats-core' as const,
}

export type BatsPackage = typeof batsPackage
