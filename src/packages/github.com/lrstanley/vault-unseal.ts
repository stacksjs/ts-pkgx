/**
 * **vault-unseal** - Package from pantry: github.com/lrstanley/vault-unseal
 *
 * @domain `github.com/lrstanley/vault-unseal`
 *
 * @install `launchpad install github.com/lrstanley/vault-unseal`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlrstanleyvaultunseal
 * console.log(pkg.name)        // "vault-unseal"
 * console.log(pkg.description) // "Package from pantry: github.com/lrstanley/vault..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lrstanley/vault-unseal.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlrstanleyvaultunsealPackage = {
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
  description: 'Package from pantry: github.com/lrstanley/vault-unseal' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/lrstanley/vault-unseal' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/lrstanley/vault-unseal -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/lrstanley/vault-unseal' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lrstanley/vault-unseal/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlrstanleyvaultunsealPackage = typeof githubcomlrstanleyvaultunsealPackage
