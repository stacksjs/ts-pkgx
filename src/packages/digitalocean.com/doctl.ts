/**
 * **doctl** - Package from pantry: digitalocean.com/doctl
 *
 * @domain `digitalocean.com/doctl`
 *
 * @install `launchpad install digitalocean.com/doctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.digitaloceancomdoctl
 * console.log(pkg.name)        // "doctl"
 * console.log(pkg.description) // "Package from pantry: digitalocean.com/doctl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/digitalocean-com/doctl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const digitaloceancomdoctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'doctl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'digitalocean.com/doctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: digitalocean.com/doctl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install digitalocean.com/doctl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +digitalocean.com/doctl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install digitalocean.com/doctl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/digitalocean.com/doctl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DigitaloceancomdoctlPackage = typeof digitaloceancomdoctlPackage
