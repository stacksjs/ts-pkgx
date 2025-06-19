/**
 * **vault-unseal** - auto-unseal utility for Hashicorp Vault
 *
 * @domain `github.com/lrstanley/vault-unseal`
 * @programs `vault-unseal`
 * @version `0.7.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install vault-unseal`
 * @name `vault-unseal`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vaultunseal
 * // Or access via domain
 * const samePkg = pantry.githubcomlrstanleyvaultunseal
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vault-unseal"
 * console.log(pkg.description) // "auto-unseal utility for Hashicorp Vault"
 * console.log(pkg.programs)    // ["vault-unseal"]
 * console.log(pkg.versions[0]) // "0.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lrstanley/vault-unseal.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vaultunsealPackage = {
  /**
   * The display name of this package.
   */
  name: 'vault-unseal' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lrstanley/vault-unseal' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'auto-unseal utility for Hashicorp Vault' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lrstanley/vault-unseal/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vault-unseal' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vault-unseal',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.0',
    '0.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type VaultunsealPackage = typeof vaultunsealPackage
