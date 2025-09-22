/**
 * **cloudflared** - Cloudflare Tunnel client (formerly Argo Tunnel)
 *
 * @domain `cloudflare.com/cloudflared`
 * @programs `cloudflared`
 * @version `2025.9.1` (33 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cloudflared`
 * @name `cloudflared`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cloudflared
 * // Or access via domain
 * const samePkg = pantry.cloudflarecomcloudflared
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cloudflared"
 * console.log(pkg.description) // "Cloudflare Tunnel client (formerly Argo Tunnel)"
 * console.log(pkg.programs)    // ["cloudflared"]
 * console.log(pkg.versions[0]) // "2025.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cloudflare-com/cloudflared.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cloudflaredPackage = {
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
  description: 'Cloudflare Tunnel client (formerly Argo Tunnel)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cloudflare.com/cloudflared/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cloudflared' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cloudflared',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.9.1',
    '2025.9.0',
    '2025.8.1',
    '2025.8.0',
    '2025.7.0',
    '2025.6.1',
    '2025.6.0',
    '2025.5.0',
    '2025.4.2',
    '2025.4.0',
    '2025.2.1',
    '2025.2.0',
    '2025.1.1',
    '2025.1.0',
    '2024.12.2',
    '2024.12.1',
    '2024.12.0',
    '2024.11.1',
    '2024.11.0',
    '2024.10.1',
    '2024.10.0',
    '2024.9.1',
    '2024.9.0',
    '2024.8.3',
    '2024.8.2',
    '2024.7.3',
    '2024.6.1',
    '2024.6.0',
    '2024.5.0',
    '2024.4.1',
    '2024.4.0',
    '2024.3.0',
    '2024.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cloudflared -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cloudflared' as const,
}

export type CloudflaredPackage = typeof cloudflaredPackage
