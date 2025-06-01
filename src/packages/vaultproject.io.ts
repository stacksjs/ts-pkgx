/**
 * **vault** - A tool for secrets management, encryption as a service, and privileged access management
 *
 * @domain `vaultproject.io`
 * @programs `vault`
 * @version `1.19.5` (56 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/vaultproject-io.md
 *
 * @install `sh <(curl https://pkgx.sh) vault`
 * @name `vault`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vault
 * // Or access via domain
 * const samePkg = pantry.vaultprojectio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vault"
 * console.log(pkg.description) // "A tool for secrets management, encryption as a ..."
 * console.log(pkg.programs)    // ["vault"]
 * console.log(pkg.versions[0]) // "1.19.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vaultproject-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vaultPackage = {
  /**
   * The display name of this package.
   */
  name: 'vault' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vaultproject.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tool for secrets management, encryption as a service, and privileged access management' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vaultproject.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) vault' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vault',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.19.5',
    '1.19.4',
    '1.19.3',
    '1.19.2',
    '1.19.1',
    '1.19.0',
    '1.18.5',
    '1.18.4',
    '1.18.3',
    '1.18.2',
    '1.18.1',
    '1.18.0',
    '1.17.6',
    '1.17.5',
    '1.17.4',
    '1.17.3',
    '1.17.2',
    '1.17.1',
    '1.17.0',
    '1.16.3',
    '1.16.2',
    '1.16.1',
    '1.16.0',
    '1.15.6',
    '1.15.5',
    '1.15.4',
    '1.15.3',
    '1.15.2',
    '1.15.1',
    '1.15.0',
    '1.14.10',
    '1.14.9',
    '1.14.8',
    '1.14.7',
    '1.14.6',
    '1.14.5',
    '1.14.4',
    '1.14.3',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.13',
    '1.13.12',
    '1.13.11',
    '1.13.10',
    '1.13.9',
    '1.13.8',
    '1.13.7',
    '1.13.6',
    '1.13.5',
    '1.13.4',
    '1.13.3',
    '1.12.11',
    '1.12.10',
    '1.12.9',
    '1.12.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'vaultproject.io' as const,
}

export type VaultPackage = typeof vaultPackage
