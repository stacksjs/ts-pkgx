/**
 * **SVT-AV1** - Package from pantry: gitlab.com/AOMediaCodec/SVT-AV1
 *
 * @domain `gitlab.com/AOMediaCodec/SVT-AV1`
 *
 * @install `launchpad install gitlab.com/AOMediaCodec/SVT-AV1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gitlabcomaomediacodecsvtav1
 * console.log(pkg.name)        // "SVT-AV1"
 * console.log(pkg.description) // "Package from pantry: gitlab.com/AOMediaCodec/SV..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/AOMediaCodec/SVT-AV1.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomaomediacodecsvtav1Package = {
  /**
   * The display name of this package.
   */
  name: 'SVT-AV1' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/AOMediaCodec/SVT-AV1' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gitlab.com/AOMediaCodec/SVT-AV1' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gitlab.com/AOMediaCodec/SVT-AV1' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gitlab.com/AOMediaCodec/SVT-AV1 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gitlab.com/AOMediaCodec/SVT-AV1' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/AOMediaCodec/SVT-AV1/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gitlabcomaomediacodecsvtav1Package = typeof gitlabcomaomediacodecsvtav1Package
