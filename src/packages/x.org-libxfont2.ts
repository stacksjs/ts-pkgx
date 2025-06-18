/**
 * **libxfont2** - pkgx package
 *
 * @domain `x.org/libxfont2`
 * @version `2.0.7` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/libxfont2.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/libxfont2 -- $SHELL -i`
 * @aliases `libxfont2`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libxfont2
 * // Or access via domain
 * const samePkg = pantry.xorglibxfont2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/libxfont2"
 * console.log(pkg.versions[0]) // "2.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libxfont2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libxfont2Package = {
  /**
   * The display name of this package.
   */
  name: 'x.org/libxfont2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libxfont2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from x.org/libxfont2' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libxfont2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/libxfont2 -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/exts',
    'x.org/protocol',
    'freetype.org',
    'x.org/xtrans',
    'zlib.net',
    'x.org/libfontenc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libxfont2',
  ] as const,
  fullPath: 'x.org/libxfont2' as const,
}

export type Libxfont2Package = typeof libxfont2Package
