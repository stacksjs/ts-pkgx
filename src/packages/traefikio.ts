/**
 * **traefik** - The Cloud Native Application Proxy
 *
 * @domain `traefik.io`
 * @programs `traefik`
 * @version `3.4.3` (61 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install traefik`
 * @name `traefik`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.traefik
 * // Or access via domain
 * const samePkg = pantry.traefikio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "traefik"
 * console.log(pkg.description) // "The Cloud Native Application Proxy"
 * console.log(pkg.programs)    // ["traefik"]
 * console.log(pkg.versions[0]) // "3.4.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/traefik-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const traefikPackage = {
  /**
   * The display name of this package.
   */
  name: 'traefik' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'traefik.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Cloud Native Application Proxy' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/traefik.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install traefik' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'traefik',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.4.3',
    '3.4.2',
    '3.4.1',
    '3.4.0',
    '3.3.7',
    '3.3.6',
    '3.3.5',
    '3.3.4',
    '3.3.3',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.5',
    '3.2.4',
    '3.2.3',
    '3.2.2',
    '3.2.1',
    '3.2.0',
    '3.1.7',
    '3.1.6',
    '3.1.5',
    '3.1.4',
    '3.1.3',
    '3.1.2',
    '3.1.1',
    '3.1.0',
    '3.0.4',
    '3.0.3',
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.11.26',
    '2.11.25',
    '2.11.24',
    '2.11.23',
    '2.11.22',
    '2.11.21',
    '2.11.20',
    '2.11.19',
    '2.11.18',
    '2.11.17',
    '2.11.16',
    '2.11.15',
    '2.11.14',
    '2.11.13',
    '2.11.12',
    '2.11.11',
    '2.11.10',
    '2.11.9',
    '2.11.8',
    '2.11.7',
    '2.11.6',
    '2.11.5',
    '2.11.4',
    '2.11.3',
    '2.11.2',
    '2.11.1',
    '2.11.0',
    '2.10.7',
    '2.10.6',
    '2.10.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) traefik -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install traefik' as const,
}

export type TraefikPackage = typeof traefikPackage
