/**
 * **zstd** - Zstandard - Fast real-time compression algorithm
 *
 * @domain `facebook.com/zstd`
 * @programs `pzstd`, `unzstd`, `zstd`, `zstdcat`, `zstdgrep`, ... (+2 more)
 * @version `1.5.7` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/zstd.md
 *
 * @install `sh <(curl https://pkgx.sh) +facebook.com/zstd -- $SHELL -i`
 * @aliases `zstd`
 * @dependencies `lz4.org^1`, `tukaani.org/xz^5`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.zstd
 * // Or access via domain
 * const samePkg = pantry.facebookcomzstd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "facebook.com/zstd"
 * console.log(pkg.description) // "Zstandard - Fast real-time compression algorithm"
 * console.log(pkg.programs)    // ["pzstd", "unzstd", ...]
 * console.log(pkg.versions[0]) // "1.5.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/zstd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zstdPackage = {
  /**
   * The display name of this package.
   */
  name: 'facebook.com/zstd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/zstd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Zstandard - Fast real-time compression algorithm' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/zstd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +facebook.com/zstd -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pzstd',
    'unzstd',
    'zstd',
    'zstdcat',
    'zstdgrep',
    'zstdless',
    'zstdmt',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lz4.org^1',
    'tukaani.org/xz^5',
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.7',
    '1.5.6',
    '1.5.5',
    '1.5.4',
    '1.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'zstd',
  ] as const,
  fullPath: 'facebook.com/zstd' as const,
}

export type ZstdPackage = typeof zstdPackage
