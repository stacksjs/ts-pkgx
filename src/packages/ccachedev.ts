/**
 * **ccache.dev** - Package from pantry: ccache.dev
 *
 * @domain `ccache.dev`
 *
 * @install `launchpad install ccache.dev`
 * @dependencies `github.com/redis/hiredis`, `facebook.com/zstd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ccachedev
 * console.log(pkg.name)        // "ccache.dev"
 * console.log(pkg.description) // "Package from pantry: ccache.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ccache-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ccachedevPackage = {
  /**
   * The display name of this package.
   */
  name: 'ccache.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ccache.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ccache.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ccache.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/redis/hiredis',
    'facebook.com/zstd',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ccache.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CcachedevPackage = typeof ccachedevPackage
