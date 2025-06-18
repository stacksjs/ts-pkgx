/**
 * **sf.net/potrace** - Convert bitmaps to vector graphics
 *
 * @domain `sourceforge.net/potrace`
 * @programs `potrace`, `mkbitmap`
 * @version `1.16.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/potrace.md
 *
 * @install `sh <(curl https://pkgx.sh) +sourceforge.net/potrace -- $SHELL -i`
 * @name `sf.net/potrace`
 * @aliases `potrace`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sfnetpotrace
 * // Or access via domain
 * const samePkg = pantry.sourceforgenetpotrace
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sf.net/potrace"
 * console.log(pkg.description) // "Convert bitmaps to vector graphics"
 * console.log(pkg.programs)    // ["potrace", "mkbitmap"]
 * console.log(pkg.versions[0]) // "1.16.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/potrace.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sfnetpotracePackage = {
  /**
   * The display name of this package.
   */
  name: 'sf.net/potrace' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/potrace' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Convert bitmaps to vector graphics' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/potrace/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +sourceforge.net/potrace -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'potrace',
    'mkbitmap',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.16.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'potrace',
  ] as const,
  fullPath: 'sourceforge.net/potrace' as const,
}

export type SfnetpotracePackage = typeof sfnetpotracePackage
