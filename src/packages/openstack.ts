/**
 * **openstack** - pkgx package
 *
 * @domain `opendev.org/openstack`
 *
 * @install `pkgx opendev.org/openstack`
 * @name `openstack`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.openstack
 * // Or access via domain
 * const samePkg = pantry.opendevorgopenstack
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openstack"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendev-org/openstack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openstackPackage = {
  /**
   * The display name of this package.
   */
  name: 'openstack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opendev.org/openstack' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from opendev.org/openstack' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx opendev.org/openstack' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'opendev.org/openstack' as const,
}

export type OpenstackPackage = typeof openstackPackage
