/**
 * **gitlab.com/AOMediaCodec/SVT-AV1** - pkgx package
 *
 * @domain `gitlab.com/AOMediaCodec/SVT/AV1`
 *
 * @install `pkgx gitlab.com/AOMediaCodec/SVT-AV1`
 * @aliases `gitlab.com/AOMediaCodec/SVT-AV1`, `AOMediaCodec/SVT-AV1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gitlabcomAOMediaCodecSVTAV1
 * // Or access via domain
 * const samePkg = pantry.gitlabcomaomediacodecsvtav1
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "AOMediaCodec"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/AOMediaCodec/SVT/AV1.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gitlabcomAOMediaCodecSVTAV1Package = {
  /**
   * The display name of this package.
   */
  name: 'AOMediaCodec' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gitlab.com/AOMediaCodec/SVT/AV1' as const,
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
  installCommand: 'pkgx gitlab.com/AOMediaCodec/SVT-AV1' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gitlab.com/AOMediaCodec/SVT-AV1',
    'AOMediaCodec/SVT-AV1',
  ] as const,
  fullPath: 'gitlab.com/AOMediaCodec/SVT-AV1' as const,
}

export type GitlabcomAOMediaCodecSVTAV1Package = typeof gitlabcomAOMediaCodecSVTAV1Package
