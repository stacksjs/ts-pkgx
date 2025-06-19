/**
 * **tokesura** - CLI and Library for working with Hasura JWTs
 *
 * @domain `github.com/kevinmichaelchen/tokesura`
 * @programs `tokesura`
 * @version `0.0.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tokesura`
 * @name `tokesura`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tokesura
 * // Or access via domain
 * const samePkg = pantry.githubcomkevinmichaelchentokesura
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tokesura"
 * console.log(pkg.description) // "CLI and Library for working with Hasura JWTs"
 * console.log(pkg.programs)    // ["tokesura"]
 * console.log(pkg.versions[0]) // "0.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kevinmichaelchen/tokesura.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tokesuraPackage = {
  /**
   * The display name of this package.
   */
  name: 'tokesura' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kevinmichaelchen/tokesura' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI and Library for working with Hasura JWTs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kevinmichaelchen/tokesura/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tokesura' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tokesura',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TokesuraPackage = typeof tokesuraPackage
