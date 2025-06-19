/**
 * **just** - Handy way to save and run project-specific commands
 *
 * @domain `just.systems`
 * @programs `just`
 * @version `1.40.0` (40 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install just`
 * @aliases `just`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.just
 * // Or access via domain
 * const samePkg = pantry.justsystems
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "just.systems"
 * console.log(pkg.description) // "Handy way to save and run project-specific comm..."
 * console.log(pkg.programs)    // ["just"]
 * console.log(pkg.versions[0]) // "1.40.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/just-systems.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const justPackage = {
  /**
   * The display name of this package.
   */
  name: 'just.systems' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'just.systems' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Handy way to save and run project-specific commands' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/just.systems/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install just' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'just',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.40.0',
    '1.39.0',
    '1.38.0',
    '1.37.0',
    '1.36.0',
    '1.35.0',
    '1.34.0',
    '1.33.0',
    '1.32.0',
    '1.31.0',
    '1.30.1',
    '1.30.0',
    '1.29.1',
    '1.29.0',
    '1.28.0',
    '1.27.0',
    '1.26.0',
    '1.25.2',
    '1.25.1',
    '1.25.0',
    '1.24.0',
    '1.23.0',
    '1.22.1',
    '1.22.0',
    '1.21.0',
    '1.20.0',
    '1.19.0',
    '1.18.1',
    '1.18.0',
    '1.17.0',
    '1.16.0',
    '1.15.0',
    '1.14.0',
    '1.13.0',
    '1.12.0',
    '1.11.0',
    '1.10.0',
    '1.9.0',
    '1.8.0',
    '1.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'just',
  ] as const,
}

export type JustPackage = typeof justPackage
