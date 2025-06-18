/**
 * **pastel** - A command-line tool to generate, analyze, convert and manipulate colors
 *
 * @domain `crates.io/pastel`
 * @programs `pastel`
 * @version `0.10.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pastel`
 * @name `pastel`
 * @dependencies `rust-lang.org>=1.56`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pastel
 * // Or access via domain
 * const samePkg = pantry.cratesiopastel
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pastel"
 * console.log(pkg.description) // "A command-line tool to generate, analyze, conve..."
 * console.log(pkg.programs)    // ["pastel"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pastel.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pastelPackage = {
  /**
   * The display name of this package.
   */
  name: 'pastel' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pastel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A command-line tool to generate, analyze, convert and manipulate colors' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pastel/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pastel' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pastel',
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
    '0.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type PastelPackage = typeof pastelPackage
