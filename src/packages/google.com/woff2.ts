/**
 * **woff2** - Utilities to create and convert Web Open Font File (WOFF) files
 *
 * @domain `google.com/woff2`
 * @programs `woff2_info`, `woff2_decompress`, `woff2_compress`
 * @version `1.0.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +google.com/woff2 -- $SHELL -i`
 * @name `woff2`
 * @dependencies `github.com/google/brotli`, `linuxgnu.org/gcc`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.woff2
 * // Or access via domain
 * const samePkg = pantry.googlecomwoff2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "woff2"
 * console.log(pkg.description) // "Utilities to create and convert Web Open Font F..."
 * console.log(pkg.programs)    // ["woff2_info", "woff2_decompress", ...]
 * console.log(pkg.versions[0]) // "1.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/woff2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const woff2Package = {
  /**
   * The display name of this package.
   */
  name: 'woff2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/woff2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Utilities to create and convert Web Open Font File (WOFF) files' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/woff2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +google.com/woff2 -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'woff2_info',
    'woff2_decompress',
    'woff2_compress',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/google/brotli',
    'linuxgnu.org/gcc',
    'gnu.org/gcc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'google.com/woff2' as const,
}

export type Woff2Package = typeof woff2Package
