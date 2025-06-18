/**
 * **quodlibet/mutagen** - Python module for handling audio metadata
 *
 * @domain `github.com/quodlibet/mutagen`
 * @version `1.47.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/quodlibet/mutagen -- $SHELL -i`
 * @aliases `quodlibet/mutagen`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.quodlibetmutagen
 * // Or access via domain
 * const samePkg = pantry.githubcomquodlibetmutagen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/quodlibet/mutagen"
 * console.log(pkg.description) // "Python module for handling audio metadata"
 * console.log(pkg.versions[0]) // "1.47.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/quodlibet/mutagen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const quodlibetmutagenPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/quodlibet/mutagen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/quodlibet/mutagen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python module for handling audio metadata' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/quodlibet/mutagen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/quodlibet/mutagen -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.47.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'quodlibet/mutagen',
  ] as const,
  fullPath: 'github.com/quodlibet/mutagen' as const,
}

export type QuodlibetmutagenPackage = typeof quodlibetmutagenPackage
