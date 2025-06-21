/**
 * **mecab** - Package from pantry: taku910.github.io/mecab
 *
 * @domain `taku910.github.io/mecab`
 *
 * @install `launchpad install taku910.github.io/mecab`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.taku910githubiomecab
 * console.log(pkg.name)        // "mecab"
 * console.log(pkg.description) // "Package from pantry: taku910.github.io/mecab"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/taku910-github-io/mecab.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const taku910githubiomecabPackage = {
  /**
   * The display name of this package.
   */
  name: 'mecab' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'taku910.github.io/mecab' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: taku910.github.io/mecab' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install taku910.github.io/mecab' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/taku910.github.io/mecab/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Taku910githubiomecabPackage = typeof taku910githubiomecabPackage
