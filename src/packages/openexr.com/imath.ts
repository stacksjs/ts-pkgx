/**
 * **imath** - Imath is a C++ and python library of 2D and 3D vector, matrix, and math operations for computer graphics
 *
 * @domain `openexr.com/imath`
 * @version `3.1.12` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +openexr.com/imath -- $SHELL -i`
 * @aliases `imath`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.imath
 * // Or access via domain
 * const samePkg = pantry.openexrcomimath
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openexr.com/imath"
 * console.log(pkg.description) // "Imath is a C++ and python library of 2D and 3D ..."
 * console.log(pkg.versions[0]) // "3.1.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openexr-com/imath.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const imathPackage = {
  /**
   * The display name of this package.
   */
  name: 'openexr.com/imath' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openexr.com/imath' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Imath is a C++ and python library of 2D and 3D vector, matrix, and math operations for computer graphics' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openexr.com/imath/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +openexr.com/imath -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.1.12',
    '3.1.11',
    '3.1.10',
    '3.1.9',
    '3.1.8',
    '3.1.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'imath',
  ] as const,
  fullPath: 'openexr.com/imath' as const,
}

export type ImathPackage = typeof imathPackage
