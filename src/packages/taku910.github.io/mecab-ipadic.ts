/**
 * **mecab-ipadic** - pkgx package
 *
 * @domain `taku910.github.io/mecab-ipadic`
 * @version `2.7.0.20070801` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +taku910.github.io/mecab-ipadic -- $SHELL -i`
 * @aliases `mecab-ipadic`
 * @dependencies `taku910.github.io/mecab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mecabipadic
 * // Or access via domain
 * const samePkg = pantry.taku910githubiomecabipadic
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "taku910.github.io/mecab-ipadic"
 * console.log(pkg.versions[0]) // "2.7.0.20070801" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taku910-github-io/mecab-ipadic.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mecabipadicPackage = {
  /**
   * The display name of this package.
   */
  name: 'taku910.github.io/mecab-ipadic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taku910.github.io/mecab-ipadic' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taku910.github.io/mecab-ipadic/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +taku910.github.io/mecab-ipadic -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'taku910.github.io/mecab',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.7.0.20070801',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mecab-ipadic',
  ] as const,
  fullPath: 'taku910.github.io/mecab-ipadic' as const,
}

export type MecabipadicPackage = typeof mecabipadicPackage
