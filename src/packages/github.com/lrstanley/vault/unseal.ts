/**
 * **github.com/lrstanley/vault-unseal** - pkgx package
 *
 * @domain `github.com/lrstanley/vault/unseal`
 *
 * @install `pkgx github.com/lrstanley/vault-unseal`
 * @aliases `github.com/lrstanley/vault-unseal`, `lrstanley/vault-unseal`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomlrstanleyvaultunseal
 * // Or access via domain
 * const samePkg = pantry.githubcomlrstanleyvaultunseal
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lrstanley"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lrstanley/vault/unseal.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlrstanleyvaultunsealPackage = {
  /**
   * The display name of this package.
   */
  name: 'lrstanley' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lrstanley/vault/unseal' as const,
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
  installCommand: 'pkgx github.com/lrstanley/vault-unseal' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/lrstanley/vault-unseal',
    'lrstanley/vault-unseal',
  ] as const,
  fullPath: 'github.com/lrstanley/vault-unseal' as const,
}

export type GithubcomlrstanleyvaultunsealPackage = typeof githubcomlrstanleyvaultunsealPackage
