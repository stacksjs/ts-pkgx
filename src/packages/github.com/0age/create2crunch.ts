/**
 * **create2crunch** - A Rust program for finding salts that create gas-efficient Ethereum addresses via CREATE2.
 *
 * @domain `github.com/0age/create2crunch`
 * @programs `create2crunch`
 * @version `2024.12.23` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install create2crunch`
 * @name `create2crunch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.create2crunch
 * // Or access via domain
 * const samePkg = pantry.githubcom0agecreate2crunch
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "create2crunch"
 * console.log(pkg.description) // "A Rust program for finding salts that create ga..."
 * console.log(pkg.programs)    // ["create2crunch"]
 * console.log(pkg.versions[0]) // "2024.12.23" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/0age/create2crunch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const create2crunchPackage = {
  /**
   * The display name of this package.
   */
  name: 'create2crunch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/0age/create2crunch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Rust program for finding salts that create gas-efficient Ethereum addresses via CREATE2.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/0age/create2crunch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install create2crunch' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'create2crunch',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2024.12.23',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type Create2crunchPackage = typeof create2crunchPackage
