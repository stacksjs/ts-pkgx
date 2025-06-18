/**
 * **ots** - 🔐 Share end-to-end encrypted secrets with others via a one-time URL
 *
 * @domain `ots.sniptt.com`
 * @programs `ots`
 * @version `0.3.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ots`
 * @aliases `ots`
 * @dependencies `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ots
 * // Or access via domain
 * const samePkg = pantry.otssnipttcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ots.sniptt.com"
 * console.log(pkg.description) // "🔐 Share end-to-end encrypted secrets with othe..."
 * console.log(pkg.programs)    // ["ots"]
 * console.log(pkg.versions[0]) // "0.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ots-sniptt-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const otsPackage = {
  /**
   * The display name of this package.
   */
  name: 'ots.sniptt.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ots.sniptt.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🔐 Share end-to-end encrypted secrets with others via a one-time URL' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ots.sniptt.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ots' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ots',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.1',
    '0.3.0',
    '0.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ots',
  ] as const,
}

export type OtsPackage = typeof otsPackage
