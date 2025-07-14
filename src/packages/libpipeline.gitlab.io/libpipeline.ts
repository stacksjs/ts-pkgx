/**
 * **libpipeline** - Package from pantry: libpipeline.gitlab.io/libpipeline
 *
 * @domain `libpipeline.gitlab.io/libpipeline`
 *
 * @install `launchpad install libpipeline.gitlab.io/libpipeline`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libpipelinegitlabiolibpipeline
 * console.log(pkg.name)        // "libpipeline"
 * console.log(pkg.description) // "Package from pantry: libpipeline.gitlab.io/libp..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libpipeline-gitlab-io/libpipeline.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libpipelinegitlabiolibpipelinePackage = {
  /**
   * The display name of this package.
   */
  name: 'libpipeline' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libpipeline.gitlab.io/libpipeline' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libpipeline.gitlab.io/libpipeline' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libpipeline.gitlab.io/libpipeline' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libpipeline.gitlab.io/libpipeline -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libpipeline.gitlab.io/libpipeline' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libpipeline.gitlab.io/libpipeline/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibpipelinegitlabiolibpipelinePackage = typeof libpipelinegitlabiolibpipelinePackage
