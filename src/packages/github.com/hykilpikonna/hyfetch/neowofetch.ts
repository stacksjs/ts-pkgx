/**
 * **neowofetch** - Fast, highly customisable system info script with LGBTQ+ pride flags
 *
 * @domain `github.com/hykilpikonna/hyfetch/neowofetch`
 * @programs `neowofetch`
 * @version `1.99.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install neowofetch`
 * @name `neowofetch`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.neowofetch
 * // Or access via domain
 * const samePkg = pantry.githubcomhykilpikonnahyfetchneowofetch
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "neowofetch"
 * console.log(pkg.description) // "Fast, highly customisable system info script wi..."
 * console.log(pkg.programs)    // ["neowofetch"]
 * console.log(pkg.versions[0]) // "1.99.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hykilpikonna/hyfetch/neowofetch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const neowofetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'neowofetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hykilpikonna/hyfetch/neowofetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast, highly customisable system info script with LGBTQ+ pride flags' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hykilpikonna/hyfetch/neowofetch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install neowofetch' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'neowofetch',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.99.0',
    '1.4.11',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type NeowofetchPackage = typeof neowofetchPackage
