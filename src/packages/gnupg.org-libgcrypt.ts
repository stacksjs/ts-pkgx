/**
 * **libgcrypt** - Cryptographic library based on the code from GnuPG
 *
 * @domain `gnupg.org/libgcrypt`
 * @programs `dumpsexp`, `hmac256`, `libgcrypt-config`, `mpicalc`
 * @version `1.11.1` (4 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/libgcrypt.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnupg.org/libgcrypt -- $SHELL -i`
 * @aliases `libgcrypt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libgcrypt
 * // Or access via domain
 * const samePkg = pantry.gnupgorglibgcrypt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnupg.org/libgcrypt"
 * console.log(pkg.description) // "Cryptographic library based on the code from GnuPG"
 * console.log(pkg.programs)    // ["dumpsexp", "hmac256", ...]
 * console.log(pkg.versions[0]) // "1.11.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/libgcrypt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libgcryptPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnupg.org/libgcrypt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/libgcrypt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Cryptographic library based on the code from GnuPG' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/libgcrypt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/libgcrypt -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dumpsexp',
    'hmac256',
    'libgcrypt-config',
    'mpicalc',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.11.1',
    '1.11.0',
    '1.10.3',
    '1.10.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libgcrypt',
  ] as const,
  fullPath: 'gnupg.org/libgcrypt' as const,
}

export type LibgcryptPackage = typeof libgcryptPackage
