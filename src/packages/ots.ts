/**
 * **ots** - 🔐 Share end-to-end encrypted secrets with others via a one-time URL
 *
 * @domain `ots.sniptt.com`
 * @programs `ots`
 * @version `0.3.1` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/ots-sniptt-com.md
 *
 * @install `sh <(curl https://pkgx.sh) ots`
 * @name `ots`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ots
 * // Or access via domain
 * const samePkg = pantry.otssnipttcom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ots"
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
  name: 'ots' as const,
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
  installCommand: 'sh <(curl https://pkgx.sh) ots' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ots',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
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
  aliases: [] as const,
  fullPath: 'ots.sniptt.com' as const,
}

export type OtsPackage = typeof otsPackage
