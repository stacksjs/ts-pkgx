/**
 * **github.com/OpenSC/pkcs11-helper** - pkgx package
 *
 * @domain `github.com/OpenSC/pkcs11/helper`
 *
 * @install `pkgx github.com/OpenSC/pkcs11-helper`
 * @aliases `github.com/OpenSC/pkcs11-helper`, `OpenSC/pkcs11-helper`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomOpenSCpkcs11helper
 * // Or access via domain
 * const samePkg = pantry.githubcomopenscpkcs11helper
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "OpenSC"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/OpenSC/pkcs11/helper.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomOpenSCpkcs11helperPackage = {
  /**
   * The display name of this package.
   */
  name: 'OpenSC' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/OpenSC/pkcs11/helper' as const,
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
  installCommand: 'pkgx github.com/OpenSC/pkcs11-helper' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/OpenSC/pkcs11-helper',
    'OpenSC/pkcs11-helper',
  ] as const,
  fullPath: 'github.com/OpenSC/pkcs11-helper' as const,
}

export type GithubcomOpenSCpkcs11helperPackage = typeof githubcomOpenSCpkcs11helperPackage
