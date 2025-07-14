/**
 * **acmedns** - Package from pantry: github.com/caddy-dns/acmedns
 *
 * @domain `github.com/caddy-dns/acmedns`
 *
 * @install `launchpad install github.com/caddy-dns/acmedns`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcaddydnsacmedns
 * console.log(pkg.name)        // "acmedns"
 * console.log(pkg.description) // "Package from pantry: github.com/caddy-dns/acmedns"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/caddy-dns/acmedns.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcaddydnsacmednsPackage = {
  /**
   * The display name of this package.
   */
  name: 'acmedns' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/caddy-dns/acmedns' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/caddy-dns/acmedns' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/caddy-dns/acmedns' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/caddy-dns/acmedns -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/caddy-dns/acmedns' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/caddy-dns/acmedns/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcaddydnsacmednsPackage = typeof githubcomcaddydnsacmednsPackage
