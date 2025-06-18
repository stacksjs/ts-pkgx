/**
 * **opendev.org/openstack/python-openstackclient** - pkgx package
 *
 * @domain `opendev.org/openstack/python/openstackclient`
 *
 * @install `pkgx opendev.org/openstack/python-openstackclient`
 * @aliases `opendev.org/openstack/python-openstackclient`, `openstack/python-openstackclient`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.opendevorgopenstackpythonopenstackclient
 * // Or access via domain
 * const samePkg = pantry.opendevorgopenstackpythonopenstackclient
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openstack"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendev-org/openstack/python/openstackclient.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opendevorgopenstackpythonopenstackclientPackage = {
  /**
   * The display name of this package.
   */
  name: 'openstack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opendev.org/openstack/python/openstackclient' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx opendev.org/openstack/python-openstackclient' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'opendev.org/openstack/python-openstackclient',
    'openstack/python-openstackclient',
  ] as const,
  fullPath: 'opendev.org/openstack/python-openstackclient' as const,
}

export type OpendevorgopenstackpythonopenstackclientPackage = typeof opendevorgopenstackpythonopenstackclientPackage
