/**
 * **crossref** - Package from pantry: pandoc.org/crossref
 *
 * @domain `pandoc.org/crossref`
 *
 * @install `launchpad install pandoc.org/crossref`
 * @dependencies `pandoc.org^2.18`, `zlib.net@1`, `gnu.org/gmp@6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pandocorgcrossref
 * console.log(pkg.name)        // "crossref"
 * console.log(pkg.description) // "Package from pantry: pandoc.org/crossref"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pandoc-org/crossref.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pandocorgcrossrefPackage = {
  /**
   * The display name of this package.
   */
  name: 'crossref' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pandoc.org/crossref' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pandoc.org/crossref' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pandoc.org/crossref' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pandoc.org^2.18',
    'zlib.net@1',
    'gnu.org/gmp@6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/crossref/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PandocorgcrossrefPackage = typeof pandocorgcrossrefPackage
