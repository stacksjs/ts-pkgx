/**
 * **hyfetch** - Fast, highly customisable system info script with LGBTQ+ pride flags
 *
 * @domain `github.com/hykilpikonna/hyfetch`
 * @programs `hyfetch`
 * @version `2.0.2` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/hykilpikonna/hyfetch`
 * @dependencies `pkgx.sh>=1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomhykilpikonnahyfetch
 * console.log(pkg.name)        // "hyfetch"
 * console.log(pkg.description) // "Fast, highly customisable system info script wi..."
 * console.log(pkg.programs)    // ["hyfetch"]
 * console.log(pkg.versions[0]) // "2.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hykilpikonna/hyfetch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hyfetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'hyfetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hykilpikonna/hyfetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast, highly customisable system info script with LGBTQ+ pride flags' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hykilpikonna/hyfetch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/hykilpikonna/hyfetch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/hykilpikonna/hyfetch' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/hykilpikonna/hyfetch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/hykilpikonna/hyfetch' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hyfetch',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh>=1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.2',
    '1.99.0',
    '1.4.11',
  ] as const,
  aliases: [] as const,
}

export type HyfetchPackage = typeof hyfetchPackage
