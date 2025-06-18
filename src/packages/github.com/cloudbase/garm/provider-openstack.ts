/**
 * **github.com/cloudbase/garm-provider-openstack** - pkgx package
 *
 * @domain `github.com/cloudbase/garm/provider-openstack`
 *
 * @install `pkgx github.com/cloudbase/garm-provider-openstack`
 * @aliases `github.com/cloudbase/garm-provider-openstack`, `cloudbase/garm-provider-openstack`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomcloudbasegarmprovideropenstack
 * // Or access via domain
 * const samePkg = pantry.githubcomcloudbasegarmprovideropenstack
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cloudbase"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cloudbase/garm/provider-openstack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcloudbasegarmprovideropenstackPackage = {
  /**
   * The display name of this package.
   */
  name: 'cloudbase' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cloudbase/garm/provider-openstack' as const,
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
  installCommand: 'pkgx github.com/cloudbase/garm-provider-openstack' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/cloudbase/garm-provider-openstack',
    'cloudbase/garm-provider-openstack',
  ] as const,
  fullPath: 'github.com/cloudbase/garm-provider-openstack' as const,
}

export type GithubcomcloudbasegarmprovideropenstackPackage = typeof githubcomcloudbasegarmprovideropenstackPackage
