/**
 * **gops** - A tool to list and diagnose Go processes currently running on your system
 *
 * @domain `github.com/google/gops`
 * @programs `gops`
 * @version `0.3.28` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gops`
 * @name `gops`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gops
 * // Or access via domain
 * const samePkg = pantry.githubcomgooglegops
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gops"
 * console.log(pkg.description) // "A tool to list and diagnose Go processes curren..."
 * console.log(pkg.programs)    // ["gops"]
 * console.log(pkg.versions[0]) // "0.3.28" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google/gops.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gopsPackage = {
  /**
   * The display name of this package.
   */
  name: 'gops' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google/gops' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tool to list and diagnose Go processes currently running on your system' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/google/gops/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gops' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gops',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.28',
    '0.3.27',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GopsPackage = typeof gopsPackage
