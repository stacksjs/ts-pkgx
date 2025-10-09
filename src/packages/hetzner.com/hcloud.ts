/**
 * **hcloud** - A command-line interface for Hetzner Cloud
 *
 * @domain `hetzner.com/hcloud`
 * @programs `hcloud`
 * @version `1.54.0` (26 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install hcloud`
 * @name `hcloud`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hcloud
 * // Or access via domain
 * const samePkg = pantry.hetznercomhcloud
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hcloud"
 * console.log(pkg.description) // "A command-line interface for Hetzner Cloud"
 * console.log(pkg.programs)    // ["hcloud"]
 * console.log(pkg.versions[0]) // "1.54.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hetzner-com/hcloud.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hcloudPackage = {
  /**
   * The display name of this package.
   */
  name: 'hcloud' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hetzner.com/hcloud' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A command-line interface for Hetzner Cloud' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hetzner.com/hcloud/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hcloud' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hcloud',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.54.0',
    '1.53.0',
    '1.52.0',
    '1.51.0',
    '1.50.0',
    '1.49.0',
    '1.48.0',
    '1.47.0',
    '1.46.0',
    '1.45.0',
    '1.44.2',
    '1.44.1',
    '1.44.0',
    '1.43.1',
    '1.43.0',
    '1.42.0',
    '1.41.1',
    '1.41.0',
    '1.40.0',
    '1.39.0',
    '1.38.3',
    '1.38.2',
    '1.38.1',
    '1.38.0',
    '1.37.0',
    '1.36.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) hcloud -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hcloud' as const,
}

export type HcloudPackage = typeof hcloudPackage
