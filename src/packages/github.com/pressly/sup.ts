/**
 * **sup** - Super simple deployment tool - think of it like 'make' for a network of servers
 *
 * @domain `github.com/pressly/sup`
 * @programs `sup`
 * @version `0.5.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) sup`
 * @name `sup`
 * @aliases `pressly/sup`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sup
 * // Or access via domain
 * const samePkg = pantry.githubcompresslysup
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sup"
 * console.log(pkg.description) // "Super simple deployment tool - think of it like..."
 * console.log(pkg.programs)    // ["sup"]
 * console.log(pkg.versions[0]) // "0.5.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/pressly/sup.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const supPackage = {
  /**
   * The display name of this package.
   */
  name: 'sup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/pressly/sup' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Super simple deployment tool - think of it like \'make\' for a network of servers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/pressly/sup/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sup' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sup',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pressly/sup',
  ] as const,
  fullPath: 'github.com/pressly/sup' as const,
}

export type SupPackage = typeof supPackage
