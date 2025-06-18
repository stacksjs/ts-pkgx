/**
 * **xrender** - pkgx package
 *
 * @domain `x.org/xrender`
 * @version `0.9.12` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/x-org/xrender.md
 *
 * @install `sh <(curl https://pkgx.sh) +x.org/xrender -- $SHELL -i`
 * @aliases `xrender`
 * @dependencies `x.org/x11^1`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xrender
 * // Or access via domain
 * const samePkg = pantry.xorgxrender
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x.org/xrender"
 * console.log(pkg.versions[0]) // "0.9.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xrender.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xrenderPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xrender' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xrender' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from x.org/xrender' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xrender/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +x.org/xrender -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.12',
    '0.9.11',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xrender',
  ] as const,
  fullPath: 'x.org/xrender' as const,
}

export type XrenderPackage = typeof xrenderPackage
