/**
 * **zellij** - Pluggable terminal workspace, with terminal multiplexer as the base feature
 *
 * @domain `crates.io/zellij`
 * @programs `zellij`
 * @version `0.42.2` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) zellij`
 * @name `zellij`
 * @dependencies `zlib.net^1`, `curl.se@8`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zellij
 * // Or access via domain
 * const samePkg = pantry.cratesiozellij
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zellij"
 * console.log(pkg.description) // "Pluggable terminal workspace, with terminal mul..."
 * console.log(pkg.programs)    // ["zellij"]
 * console.log(pkg.versions[0]) // "0.42.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/zellij.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zellijPackage = {
  /**
   * The display name of this package.
   */
  name: 'zellij' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/zellij' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Pluggable terminal workspace, with terminal multiplexer as the base feature' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/zellij/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) zellij' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zellij',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'curl.se@8',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.42.2',
    '0.42.1',
    '0.42.0',
    '0.41.2',
    '0.41.1',
    '0.41.0',
    '0.40.1',
    '0.40.0',
    '0.39.2',
    '0.39.1',
    '0.39.0',
    '0.38.2',
    '0.38.1',
    '0.38.0',
    '0.37.2',
    '0.37.1',
    '0.37.0',
    '0.36.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/zellij' as const,
}

export type ZellijPackage = typeof zellijPackage
