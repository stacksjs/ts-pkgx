/**
 * **traefik.io** - Package from pantry: traefik.io
 *
 * @domain `traefik.io`
 *
 * @install `launchpad install traefik.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.traefikio
 * console.log(pkg.name)        // "traefik.io"
 * console.log(pkg.description) // "Package from pantry: traefik.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/traefik-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const traefikioPackage = {
  /**
   * The display name of this package.
   */
  name: 'traefik.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'traefik.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: traefik.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install traefik.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +traefik.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install traefik.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/traefik.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TraefikioPackage = typeof traefikioPackage
