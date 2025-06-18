/**
 * **garm-provider-openstack** - Garm external provider for OpenStack
 *
 * @domain `github.com/cloudbase/garm-provider-openstack`
 * @programs `garm-provider-openstack`
 * @version `0.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) garm-provider-openstack`
 * @name `cloudbase/garm-provider-openstack`
 * @aliases `garm-provider-openstack`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.garmprovideropenstack
 * // Or access via domain
 * const samePkg = pantry.githubcomcloudbasegarmprovideropenstack
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cloudbase/garm-provider-openstack"
 * console.log(pkg.description) // "Garm external provider for OpenStack"
 * console.log(pkg.programs)    // ["garm-provider-openstack"]
 * console.log(pkg.versions[0]) // "0.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cloudbase/garm-provider-openstack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const garmprovideropenstackPackage = {
  /**
   * The display name of this package.
   */
  name: 'cloudbase/garm-provider-openstack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cloudbase/garm-provider-openstack' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Garm external provider for OpenStack' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cloudbase/garm-provider-openstack/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) garm-provider-openstack' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'garm-provider-openstack',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'garm-provider-openstack',
  ] as const,
  fullPath: 'github.com/cloudbase/garm-provider-openstack' as const,
}

export type GarmprovideropenstackPackage = typeof garmprovideropenstackPackage
