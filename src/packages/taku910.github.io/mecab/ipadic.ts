/**
 * **taku910.github.io/mecab-ipadic** - pkgx package
 *
 * @domain `taku910.github.io/mecab/ipadic`
 *
 * @install `pkgx taku910.github.io/mecab-ipadic`
 * @name `mecab-ipadic`
 * @aliases `taku910.github.io/mecab-ipadic`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.taku910githubiomecabipadic
 * // Or access via domain
 * const samePkg = pantry.taku910githubiomecabipadic
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mecab-ipadic"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taku910-github-io/mecab/ipadic.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taku910githubiomecabipadicPackage = {
  /**
   * The display name of this package.
   */
  name: 'mecab-ipadic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taku910.github.io/mecab/ipadic' as const,
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
  installCommand: 'pkgx taku910.github.io/mecab-ipadic' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'taku910.github.io/mecab-ipadic',
  ] as const,
  fullPath: 'taku910.github.io/mecab-ipadic' as const,
}

export type Taku910githubiomecabipadicPackage = typeof taku910githubiomecabipadicPackage
