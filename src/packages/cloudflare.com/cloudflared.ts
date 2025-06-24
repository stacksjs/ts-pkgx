/**
 * **cloudflared** - Package from pantry: cloudflare.com/cloudflared
 *
 * @domain `cloudflare.com/cloudflared`
 *
 * @install `launchpad install cloudflare.com/cloudflared`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cloudflarecomcloudflared
 * console.log(pkg.name)        // "cloudflared"
 * console.log(pkg.description) // "Package from pantry: cloudflare.com/cloudflared"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudflare-com/cloudflared.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudflarecomcloudflaredPackage = {
  /**
   * The display name of this package.
   */
  name: 'cloudflared' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cloudflare.com/cloudflared' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cloudflare.com/cloudflared' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cloudflare.com/cloudflared' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cloudflare.com/cloudflared -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cloudflare.com/cloudflared' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cloudflare.com/cloudflared/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CloudflarecomcloudflaredPackage = typeof cloudflarecomcloudflaredPackage
