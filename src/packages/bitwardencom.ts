/**
 * **bw** - Secure and free password manager for all of your devices
 *
 * @domain `bitwarden.com`
 * @programs `bw`
 * @version `2025.4.0` (24 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bw`
 * @aliases `bw`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.bw
 * // Or access via domain
 * const samePkg = pantry.bitwardencom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bitwarden.com"
 * console.log(pkg.description) // "Secure and free password manager for all of you..."
 * console.log(pkg.programs)    // ["bw"]
 * console.log(pkg.versions[0]) // "2025.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bitwarden-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bwPackage = {
  /**
   * The display name of this package.
   */
  name: 'bitwarden.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bitwarden.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Secure and free password manager for all of your devices' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bitwarden.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bw' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bw',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.4.0',
    '2025.3.0',
    '2025.2.0',
    '2025.1.3',
    '2025.1.2',
    '2025.1.1',
    '2025.1.0',
    '2024.12.0',
    '2024.11.1',
    '2024.11.0',
    '2024.10.0',
    '2024.9.0',
    '2024.8.2',
    '2024.8.1',
    '2024.7.2',
    '2024.7.1',
    '2024.6.1',
    '2024.6.0',
    '2024.4.1',
    '2024.4.0',
    '2024.3.1',
    '2024.2.1',
    '2024.2.0',
    '1.22.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'bw',
  ] as const,
}

export type BwPackage = typeof bwPackage
