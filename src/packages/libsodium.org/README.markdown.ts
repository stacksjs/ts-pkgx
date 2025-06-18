/**
 * **README.markdown** - pkgx package
 *
 * @domain `libsodium.org/README.markdown`
 *
 * @install `pkgx libsodium.org/README.markdown`
 * @name `README.markdown`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.READMEmarkdown
 * // Or access via domain
 * const samePkg = pantry.libsodiumorgreadmemarkdown
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "README.markdown"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libsodium-org/README-markdown.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rEADMEmarkdownPackage = {
  /**
   * The display name of this package.
   */
  name: 'README.markdown' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libsodium.org/README.markdown' as const,
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
  installCommand: 'pkgx libsodium.org/README.markdown' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'libsodium.org/README.markdown' as const,
}

export type READMEmarkdownPackage = typeof rEADMEmarkdownPackage
