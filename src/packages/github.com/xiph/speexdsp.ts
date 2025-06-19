/**
 * **speexdsp** - Speex audio processing library - THIS IS A MIRROR, DEVELOPMENT HAPPENS AT https://gitlab.xiph.org/xiph/speexdsp
 *
 * @domain `github.com/xiph/speexdsp`
 * @version `1.2.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/xiph/speexdsp -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomxiphspeexdsp
 * console.log(pkg.name)        // "speexdsp"
 * console.log(pkg.description) // "Speex audio processing library - THIS IS A MIRR..."
 * console.log(pkg.versions[0]) // "1.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xiph/speexdsp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomxiphspeexdspPackage = {
  /**
   * The display name of this package.
   */
  name: 'speexdsp' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +github.com/xiph/speexdsp -- $SHELL -i' as const,
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
  aliases: [] as const,
}

export type GithubcomxiphspeexdspPackage = typeof githubcomxiphspeexdspPackage
