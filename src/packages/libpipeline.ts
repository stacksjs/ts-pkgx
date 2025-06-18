/**
 * **libpipeline** - pkgx package
 *
 * @domain `libpipeline.gitlab.io/libpipeline`
 * @version `1.5.8` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/libpipeline-gitlab-io/libpipeline.md
 *
 * @install `sh <(curl https://pkgx.sh) +libpipeline.gitlab.io/libpipeline -- $SHELL -i`
 * @name `libpipeline`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libpipeline
 * // Or access via domain
 * const samePkg = pantry.libpipelinegitlabiolibpipeline
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libpipeline"
 * console.log(pkg.versions[0]) // "1.5.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libpipeline-gitlab-io/libpipeline.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libpipelinePackage = {
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libpipeline.gitlab.io/libpipeline/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +libpipeline.gitlab.io/libpipeline -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.8',
    '1.5.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'libpipeline.gitlab.io/libpipeline' as const,
}

export type LibpipelinePackage = typeof libpipelinePackage
