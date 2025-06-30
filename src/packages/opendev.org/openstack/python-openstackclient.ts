/**
 * **python-openstackclient** - Package from pantry: opendev.org/openstack/python-openstackclient
 *
 * @domain `opendev.org/openstack/python-openstackclient`
 *
 * @install `launchpad install opendev.org/openstack/python-openstackclient`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opendevorgopenstackpythonopenstackclient
 * console.log(pkg.name)        // "python-openstackclient"
 * console.log(pkg.description) // "Package from pantry: opendev.org/openstack/pyth..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opendev-org/openstack/python-openstackclient.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opendevorgopenstackpythonopenstackclientPackage = {
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
  description: 'Package from pantry: opendev.org/openstack/python-openstackclient' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install opendev.org/openstack/python-openstackclient' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +opendev.org/openstack/python-openstackclient -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install opendev.org/openstack/python-openstackclient' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opendev.org/openstack/python-openstackclient/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpendevorgopenstackpythonopenstackclientPackage = typeof opendevorgopenstackpythonopenstackclientPackage
