/**
 * **aac-enc** - Standalone library of the Fraunhofer FDK AAC code from Android
 *
 * @domain `sourceforge.net/opencore-amr`
 * @programs `aac-enc`
 * @version `2.0.3` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install aac-enc`
 * @aliases `aac-enc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.aacenc
 * // Or access via domain
 * const samePkg = pantry.sourceforgenetopencoreamr
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "opencore-amr"
 * console.log(pkg.description) // "Standalone library of the Fraunhofer FDK AAC co..."
 * console.log(pkg.programs)    // ["aac-enc"]
 * console.log(pkg.versions[0]) // "2.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/opencore-amr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aacencPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencore-amr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/opencore-amr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Standalone library of the Fraunhofer FDK AAC code from Android' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/opencore-amr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install aac-enc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aac-enc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.3',
    '2.0.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'aac-enc',
  ] as const,
}

export type AacencPackage = typeof aacencPackage
