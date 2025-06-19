/**
 * **openstack** - pkgx package
 *
 * @domain `opendev.org/openstack/python-openstackclient`
 * @programs `openstack`, `openstack-inventory`
 * @version `8.1.0` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +opendev.org/openstack/python-openstackclient -- $SHELL -i`
 * @aliases `openstack`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.openstack
 * // Or access via domain
 * const samePkg = pantry.opendevorgopenstackpythonopenstackclient
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "python-openstackclient"
 * console.log(pkg.programs)    // ["openstack", "openstack-inventory"]
 * console.log(pkg.versions[0]) // "8.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendev-org/openstack/python-openstackclient.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openstackPackage = {
  /**
   * The display name of this package.
   */
  name: 'python-openstackclient' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opendev.org/openstack/python-openstackclient' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opendev.org/openstack/python-openstackclient/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +opendev.org/openstack/python-openstackclient -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'openstack',
    'openstack-inventory',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.1.0',
    '8.0.0',
    '7.4.0',
    '7.3.1',
    '7.3.0',
    '7.2.1',
    '7.2.0',
    '7.1.4',
    '7.1.3',
    '7.1.2',
    '7.1.1',
    '7.1.0',
    '7.0.0',
    '6.6.1',
    '6.6.0',
    '6.5.0',
    '6.4.0',
    '6.3.0',
    '6.2.1',
    '6.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'openstack',
  ] as const,
}

export type OpenstackPackage = typeof openstackPackage
