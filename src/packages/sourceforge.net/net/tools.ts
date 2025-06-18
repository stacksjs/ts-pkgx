/**
 * **sourceforge.net/net-tools** - pkgx package
 *
 * @domain `sourceforge.net/net/tools`
 *
 * @install `pkgx sourceforge.net/net-tools`
 * @name `net-tools`
 * @aliases `sourceforge.net/net-tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sourceforgenetnettools
 * // Or access via domain
 * const samePkg = pantry.sourceforgenetnettools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "net-tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/net/tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetnettoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'net-tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/net/tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sourceforge.net/net-tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sourceforge.net/net-tools',
  ] as const,
  fullPath: 'sourceforge.net/net-tools' as const,
}

export type SourceforgenetnettoolsPackage = typeof sourceforgenetnettoolsPackage
