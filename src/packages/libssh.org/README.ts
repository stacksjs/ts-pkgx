/**
 * **README** - pkgx package
 *
 * @domain `libssh.org/README`
 *
 * @install `pkgx libssh.org/README`
 * @name `README`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.README
 * // Or access via domain
 * const samePkg = pantry.libsshorgreadme
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "README"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libssh-org/README.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rEADMEPackage = {
  /**
   * The display name of this package.
   */
  name: 'README' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libssh.org/README' as const,
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
  installCommand: 'pkgx libssh.org/README' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'libssh.org/README' as const,
}

export type READMEPackage = typeof rEADMEPackage
