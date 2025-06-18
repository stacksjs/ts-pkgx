/**
 * **xiph/speexdsp** - Speex audio processing library - THIS IS A MIRROR, DEVELOPMENT HAPPENS AT https://gitlab.xiph.org/xiph/speexdsp
 *
 * @domain `github.com/xiph/speexdsp`
 * @version `1.2.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/xiph/speexdsp -- $SHELL -i`
 * @aliases `xiph/speexdsp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xiphspeexdsp
 * // Or access via domain
 * const samePkg = pantry.githubcomxiphspeexdsp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/xiph/speexdsp"
 * console.log(pkg.description) // "Speex audio processing library - THIS IS A MIRR..."
 * console.log(pkg.versions[0]) // "1.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xiph/speexdsp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xiphspeexdspPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/xiph/speexdsp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xiph/speexdsp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Speex audio processing library - THIS IS A MIRROR, DEVELOPMENT HAPPENS AT https://gitlab.xiph.org/xiph/speexdsp' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/xiph/speexdsp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/xiph/speexdsp -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xiph/speexdsp',
  ] as const,
  fullPath: 'github.com/xiph/speexdsp' as const,
}

export type XiphspeexdspPackage = typeof xiphspeexdspPackage
