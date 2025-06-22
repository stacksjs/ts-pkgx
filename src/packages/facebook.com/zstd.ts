/**
 * **zstd** - Package from pantry: facebook.com/zstd
 *
 * @domain `facebook.com/zstd`
 *
 * @install `launchpad install facebook.com/zstd`
 * @dependencies `lz4.org^1`, `tukaani.org/xz^5`, `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcomzstd
 * console.log(pkg.name)        // "zstd"
 * console.log(pkg.description) // "Package from pantry: facebook.com/zstd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/zstd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcomzstdPackage = {
  /**
   * The display name of this package.
   */
  name: 'zstd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/zstd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: facebook.com/zstd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install facebook.com/zstd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +facebook.com/zstd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install facebook.com/zstd' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lz4.org^1',
    'tukaani.org/xz^5',
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/zstd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FacebookcomzstdPackage = typeof facebookcomzstdPackage
