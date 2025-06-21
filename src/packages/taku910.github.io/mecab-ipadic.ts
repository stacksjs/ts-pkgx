/**
 * **mecab-ipadic** - Package from pantry: taku910.github.io/mecab-ipadic
 *
 * @domain `taku910.github.io/mecab-ipadic`
 *
 * @install `launchpad install taku910.github.io/mecab-ipadic`
 * @dependencies `taku910.github.io/mecab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.taku910githubiomecabipadic
 * console.log(pkg.name)        // "mecab-ipadic"
 * console.log(pkg.description) // "Package from pantry: taku910.github.io/mecab-ip..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taku910-github-io/mecab-ipadic.md
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
  domain: 'taku910.github.io/mecab-ipadic' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: taku910.github.io/mecab-ipadic' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install taku910.github.io/mecab-ipadic' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'taku910.github.io/mecab',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taku910.github.io/mecab-ipadic/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Taku910githubiomecabipadicPackage = typeof taku910githubiomecabipadicPackage
