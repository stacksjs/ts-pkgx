/**
 * **SvtAv1EncApp** - AV1 encoder
 *
 * @domain `gitlab.com/AOMediaCodec/SVT-AV1`
 * @programs `SvtAv1EncApp`
 * @version `3.0.2` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install SvtAv1EncApp`
 * @aliases `SvtAv1EncApp`
 * @dependencies `cmake.org`, `yasm.tortall.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.SvtAv1EncApp
 * // Or access via domain
 * const samePkg = pantry.gitlabcomaomediacodecsvtav1
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "SVT-AV1"
 * console.log(pkg.description) // "AV1 encoder"
 * console.log(pkg.programs)    // ["SvtAv1EncApp"]
 * console.log(pkg.versions[0]) // "3.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gitlab-com/AOMediaCodec/SVT-AV1.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const svtAv1EncAppPackage = {
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
  description: 'AV1 encoder' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/AOMediaCodec/SVT-AV1/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install SvtAv1EncApp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'SvtAv1EncApp',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
    'yasm.tortall.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.2',
    '3.0.1',
    '3.0.0',
    '2.3.0',
    '2.2.1',
    '2.2.0',
    '2.1.2',
    '2.1.1',
    '2.1.0',
    '2.0.0',
    '1.8.0',
    '1.7.0',
    '1.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'SvtAv1EncApp',
  ] as const,
}

export type SvtAv1EncAppPackage = typeof svtAv1EncAppPackage
