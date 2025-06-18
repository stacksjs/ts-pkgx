/**
 * **lux** - 👾 Fast and simple video download library and CLI tool written in Go
 *
 * @domain `github.com/iawia002/lux`
 * @programs `lux`
 * @version `0.24.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lux`
 * @name `lux`
 * @dependencies `ffmpeg.org`, `go.dev^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lux
 * // Or access via domain
 * const samePkg = pantry.githubcomiawia002lux
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lux"
 * console.log(pkg.description) // "👾 Fast and simple video download library and C..."
 * console.log(pkg.programs)    // ["lux"]
 * console.log(pkg.versions[0]) // "0.24.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/iawia002/lux.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const luxPackage = {
  /**
   * The display name of this package.
   */
  name: 'lux' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/iawia002/lux' as const,
  /**
   * Brief description of what this package does.
   */
  description: '👾 Fast and simple video download library and CLI tool written in Go' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/iawia002/lux/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install lux' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lux',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ffmpeg.org',
    'go.dev^1.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.24.1',
    '0.24.0',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LuxPackage = typeof luxPackage
