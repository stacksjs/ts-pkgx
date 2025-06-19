/**
 * **huniq** - Filter out duplicates on the command line. Replacement for `sort | uniq` optimized for speed (10x faster) when sorting is not needed.
 *
 * @domain `crates.io/huniq`
 * @programs `huniq`
 * @version `2022.12.10` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install huniq`
 * @name `huniq`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.huniq
 * // Or access via domain
 * const samePkg = pantry.cratesiohuniq
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "huniq"
 * console.log(pkg.description) // "Filter out duplicates on the command line. Repl..."
 * console.log(pkg.programs)    // ["huniq"]
 * console.log(pkg.versions[0]) // "2022.12.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/huniq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const huniqPackage = {
  /**
   * The display name of this package.
   */
  name: 'huniq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/huniq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Filter out duplicates on the command line. Replacement for `sort | uniq` optimized for speed (10x faster) when sorting is not needed.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/huniq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install huniq' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'huniq',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2022.12.10',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type HuniqPackage = typeof huniqPackage
