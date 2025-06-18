/**
 * **x/tools** - pkgx package
 *
 * @domain `golang.org/x/tools`
 *
 * @install `pkgx golang.org/x/tools`
 * @aliases `x/tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xtools
 * // Or access via domain
 * const samePkg = pantry.golangorgxtools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "x"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/golang-org/x/tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xtoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'x' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'golang.org/x/tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from golang.org/x/tools' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx golang.org/x/tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'x/tools',
  ] as const,
  fullPath: 'golang.org/x/tools' as const,
}

export type XtoolsPackage = typeof xtoolsPackage
