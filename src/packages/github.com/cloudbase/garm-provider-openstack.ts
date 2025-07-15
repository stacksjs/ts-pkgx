/**
 * **garm-provider-openstack** - Package from pantry: github.com/cloudbase/garm-provider-openstack
 *
 * @domain `github.com/cloudbase/garm-provider-openstack`
 *
 * @install `launchpad install github.com/cloudbase/garm-provider-openstack`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcloudbasegarmprovideropenstack
 * console.log(pkg.name)        // "garm-provider-openstack"
 * console.log(pkg.description) // "Package from pantry: github.com/cloudbase/garm-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cloudbase/garm-provider-openstack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcloudbasegarmprovideropenstackPackage = {
  /**
   * The display name of this package.
   */
  name: 'garm-provider-openstack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cloudbase/garm-provider-openstack' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/cloudbase/garm-provider-openstack' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/cloudbase/garm-provider-openstack' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/cloudbase/garm-provider-openstack -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/cloudbase/garm-provider-openstack' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cloudbase/garm-provider-openstack/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcloudbasegarmprovideropenstackPackage = typeof githubcomcloudbasegarmprovideropenstackPackage
