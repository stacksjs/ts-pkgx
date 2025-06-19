/**
 * **xcaddy** - Build Caddy with plugins
 *
 * @domain `github.com/caddyserver/xcaddy`
 * @programs `xcaddy`
 * @version `0.4.4` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xcaddy`
 * @name `xcaddy`
 * @dependencies `go.dev^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xcaddy
 * // Or access via domain
 * const samePkg = pantry.githubcomcaddyserverxcaddy
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xcaddy"
 * console.log(pkg.description) // "Build Caddy with plugins"
 * console.log(pkg.programs)    // ["xcaddy"]
 * console.log(pkg.versions[0]) // "0.4.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/caddyserver/xcaddy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcaddyPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcaddy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/caddyserver/xcaddy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Build Caddy with plugins' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/caddyserver/xcaddy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xcaddy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xcaddy',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.4',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type XcaddyPackage = typeof xcaddyPackage
