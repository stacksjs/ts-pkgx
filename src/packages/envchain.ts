/**
 * **envchain** - Environment variables meet macOS Keychain and gnome-keyring <3
 *
 * @domain `github.com/sorah/envchain`
 * @programs `envchain`
 * @version `1.1.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/github-com/sorah/envchain.md
 *
 * @install `sh <(curl https://pkgx.sh) envchain`
 * @name `envchain`
 * @aliases `sorah/envchain`
 * @dependencies `linuxgnu.org/readlinegnome.org/libsecret`, `gnu.org/readline`, `gnome.org/libsecret`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.envchain
 * // Or access via domain
 * const samePkg = pantry.githubcomsorahenvchain
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "envchain"
 * console.log(pkg.description) // "Environment variables meet macOS Keychain and g..."
 * console.log(pkg.programs)    // ["envchain"]
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sorah/envchain.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const envchainPackage = {
  /**
   * The display name of this package.
   */
  name: 'envchain' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sorah/envchain' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Environment variables meet macOS Keychain and gnome-keyring <3' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sorah/envchain/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) envchain' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'envchain',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxgnu.org/readlinegnome.org/libsecret',
    'gnu.org/readline',
    'gnome.org/libsecret',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sorah/envchain',
  ] as const,
  fullPath: 'github.com/sorah/envchain' as const,
}

export type EnvchainPackage = typeof envchainPackage
