/**
 * **xinerama** - pkgx package
 *
 * @domain `x.org/xinerama`
 * @version `1.1.5` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xinerama -- $SHELL -i`
 * @aliases `xinerama`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xinerama
 * // Or access via domain
 * const samePkg = pantry.xorgxinerama
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xinerama"
 * console.log(pkg.versions[0]) // "1.1.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xinerama.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xineramaPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xinerama' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xinerama' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xinerama/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xinerama -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
    'x.org/exts',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xinerama',
  ] as const,
  fullPath: 'x.org/xinerama' as const,
}

export type XineramaPackage = typeof xineramaPackage
