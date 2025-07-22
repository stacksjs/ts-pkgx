/**
 * **optipng** - Package from pantry: sf.net/optipng
 *
 * @domain `sf.net/optipng`
 *
 * @install `launchpad install sf.net/optipng`
 * @dependencies `libpng.org^1`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sfnetoptipng
 * console.log(pkg.name)        // "optipng"
 * console.log(pkg.description) // "Package from pantry: sf.net/optipng"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sf-net/optipng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sfnetoptipngPackage = {
  /**
   * The display name of this package.
   */
  name: 'optipng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sf.net/optipng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sf.net/optipng' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sf.net/optipng' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sf.net/optipng -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sf.net/optipng' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org^1',
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sf.net/optipng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SfnetoptipngPackage = typeof sfnetoptipngPackage
