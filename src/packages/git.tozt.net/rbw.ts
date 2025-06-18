/**
 * **rbw** - Unofficial Bitwarden CLI client
 *
 * @domain `git.tozt.net/rbw`
 * @programs `rbw`
 * @version `1.13.2` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rbw`
 * @name `rbw`
 * @dependencies `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rbw
 * // Or access via domain
 * const samePkg = pantry.gittoztnetrbw
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rbw"
 * console.log(pkg.description) // "Unofficial Bitwarden CLI client"
 * console.log(pkg.programs)    // ["rbw"]
 * console.log(pkg.versions[0]) // "1.13.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/git-tozt-net/rbw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rbwPackage = {
  /**
   * The display name of this package.
   */
  name: 'rbw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'git.tozt.net/rbw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Unofficial Bitwarden CLI client' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/git.tozt.net/rbw/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install rbw' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rbw',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.13.2',
    '1.13.1',
    '1.13.0',
    '1.12.1',
    '1.12.0',
    '1.11.1',
    '1.11.0',
    '1.10.2',
    '1.10.1',
    '1.10.0',
    '1.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type RbwPackage = typeof rbwPackage
