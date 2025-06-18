/**
 * **gpgme** - Library access to GnuPG
 *
 * @domain `gnupg.org/gpgme`
 * @programs `gpgme-config`, `gpgme-json`, `gpgme-tool`
 * @version `2.0.0` (11 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/gpgme.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnupg.org/gpgme -- $SHELL -i`
 * @name `gpgme`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gpgme
 * // Or access via domain
 * const samePkg = pantry.gnupgorggpgme
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gpgme"
 * console.log(pkg.description) // "Library access to GnuPG"
 * console.log(pkg.programs)    // ["gpgme-config", "gpgme-json", ...]
 * console.log(pkg.versions[0]) // "2.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/gpgme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gpgmePackage = {
  /**
   * The display name of this package.
   */
  name: 'gpgme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/gpgme' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library access to GnuPG' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/gpgme/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/gpgme -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gpgme-config',
    'gpgme-json',
    'gpgme-tool',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.0',
    '1.24.3',
    '1.24.2',
    '1.24.1',
    '1.24.0',
    '1.23.2',
    '1.23.1',
    '1.23.0',
    '1.22.0',
    '1.19.0',
    '1.5.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'gnupg.org/gpgme' as const,
}

export type GpgmePackage = typeof gpgmePackage
