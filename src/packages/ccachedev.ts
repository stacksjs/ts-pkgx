/**
 * **ccache** - Object-file caching compiler wrapper
 *
 * @domain `ccache.dev`
 * @programs `ccache`
 * @version `4.12.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ccache`
 * @name `ccache`
 * @dependencies `github.com/redis/hiredis`, `facebook.com/zstd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ccache
 * // Or access via domain
 * const samePkg = pantry.ccachedev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ccache"
 * console.log(pkg.description) // "Object-file caching compiler wrapper"
 * console.log(pkg.programs)    // ["ccache"]
 * console.log(pkg.versions[0]) // "4.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ccache-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ccachePackage = {
  /**
   * The display name of this package.
   */
  name: 'ccache' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ccache.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Object-file caching compiler wrapper' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ccache.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ccache' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ccache',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/redis/hiredis',
    'facebook.com/zstd',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.12.0',
    '4.11.3',
    '4.11.2',
    '4.11.1',
    '4.11.0',
    '4.10.2',
    '4.10.1',
    '4.10.0',
    '4.9.1',
    '4.9.0',
    '4.8.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ccache -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ccache' as const,
}

export type CcachePackage = typeof ccachePackage
