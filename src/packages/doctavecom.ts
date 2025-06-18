/**
 * **doctave** - A batteries-included developer documentation site generator
 *
 * @domain `doctave.com`
 * @programs `doctave`
 * @version `0.4.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install doctave`
 * @aliases `doctave`
 * @dependencies `rust-lang.org>=1.65`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.doctave
 * // Or access via domain
 * const samePkg = pantry.doctavecom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "doctave.com"
 * console.log(pkg.description) // "A batteries-included developer documentation si..."
 * console.log(pkg.programs)    // ["doctave"]
 * console.log(pkg.versions[0]) // "0.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/doctave-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const doctavePackage = {
  /**
   * The display name of this package.
   */
  name: 'doctave.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'doctave.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A batteries-included developer documentation site generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/doctave.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install doctave' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'doctave',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org>=1.65',
    'rust-lang.org/cargo',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'doctave',
  ] as const,
}

export type DoctavePackage = typeof doctavePackage
