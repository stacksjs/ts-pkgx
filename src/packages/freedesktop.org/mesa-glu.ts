/**
 * **mesa-glu** - pkgx package
 *
 * @domain `freedesktop.org/mesa-glu`
 * @version `9.0.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/mesa-glu -- $SHELL -i`
 * @aliases `mesa-glu`
 * @dependencies `mesa3d.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mesaglu
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgmesaglu
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/mesa-glu"
 * console.log(pkg.versions[0]) // "9.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/mesa-glu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mesagluPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/mesa-glu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/mesa-glu' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/mesa-glu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/mesa-glu -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'mesa3d.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mesa-glu',
  ] as const,
  fullPath: 'freedesktop.org/mesa-glu' as const,
}

export type MesagluPackage = typeof mesagluPackage
