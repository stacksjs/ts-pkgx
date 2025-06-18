/**
 * **tokei** - Program that allows you to count code, quickly
 *
 * @domain `crates.io/tokei`
 * @programs `tokei`
 * @version `12.1.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tokei`
 * @name `tokei`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tokei
 * // Or access via domain
 * const samePkg = pantry.cratesiotokei
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tokei"
 * console.log(pkg.description) // "Program that allows you to count code, quickly"
 * console.log(pkg.programs)    // ["tokei"]
 * console.log(pkg.versions[0]) // "12.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tokei.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tokeiPackage = {
  /**
   * The display name of this package.
   */
  name: 'tokei' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tokei' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Program that allows you to count code, quickly' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/tokei/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tokei' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tokei',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.56',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '12.1.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TokeiPackage = typeof tokeiPackage
