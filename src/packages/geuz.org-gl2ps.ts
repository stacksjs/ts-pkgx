/**
 * **gl2ps** - pkgx package
 *
 * @domain `geuz.org/gl2ps`
 * @version `1.4.2` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/geuz-org/gl2ps.md
 *
 * @install `sh <(curl https://pkgx.sh) +geuz.org/gl2ps -- $SHELL -i`
 * @aliases `gl2ps`
 * @dependencies `libpng.org`, `linuxfreeglut.sourceforge.io`, `freeglut.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gl2ps
 * // Or access via domain
 * const samePkg = pantry.geuzorggl2ps
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "geuz.org/gl2ps"
 * console.log(pkg.versions[0]) // "1.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/geuz-org/gl2ps.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gl2psPackage = {
  /**
   * The display name of this package.
   */
  name: 'geuz.org/gl2ps' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'geuz.org/gl2ps' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from geuz.org/gl2ps' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/geuz.org/gl2ps/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +geuz.org/gl2ps -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org',
    'linuxfreeglut.sourceforge.io',
    'freeglut.sourceforge.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gl2ps',
  ] as const,
  fullPath: 'geuz.org/gl2ps' as const,
}

export type Gl2psPackage = typeof gl2psPackage
