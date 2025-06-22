/**
 * **shards** - Fast and statically typed, compiled language with Ruby-like syntax
 *
 * @domain `crystal-lang.org/shards`
 * @programs `shards`
 * @version `0.19.1` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install shards`
 * @name `shards`
 * @dependencies `hboehm.info/gc^8`, `pyyaml.org/libyaml^0`, `crystal-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.shards
 * // Or access via domain
 * const samePkg = pantry.crystallangorgshards
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "shards"
 * console.log(pkg.description) // "Fast and statically typed, compiled language wi..."
 * console.log(pkg.programs)    // ["shards"]
 * console.log(pkg.versions[0]) // "0.19.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crystal-lang-org/shards.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const shardsPackage = {
  /**
   * The display name of this package.
   */
  name: 'shards' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crystal-lang.org/shards' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast and statically typed, compiled language with Ruby-like syntax' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crystal-lang.org/shards/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install shards' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'shards',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'hboehm.info/gc^8',
    'pyyaml.org/libyaml^0',
    'crystal-lang.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.19.1',
    '0.19.0',
    '0.18.0',
    '0.17.4',
    '0.17.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) shards -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install shards' as const,
}

export type ShardsPackage = typeof shardsPackage
