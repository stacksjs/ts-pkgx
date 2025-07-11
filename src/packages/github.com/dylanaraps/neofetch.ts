/**
 * **neofetch** - 🖼️  A command-line system information tool written in bash 3.2+
 *
 * @domain `github.com/dylanaraps/neofetch`
 * @programs `neofetch`
 * @version `7.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install neofetch`
 * @name `neofetch`
 * @dependencies `darwin:github.com/jhford/screenresolution` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.neofetch
 * // Or access via domain
 * const samePkg = pantry.githubcomdylanarapsneofetch
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "neofetch"
 * console.log(pkg.description) // "🖼️  A command-line system information tool wri..."
 * console.log(pkg.programs)    // ["neofetch"]
 * console.log(pkg.versions[0]) // "7.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dylanaraps/neofetch.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const neofetchPackage = {
  /**
   * The display name of this package.
   */
  name: 'neofetch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dylanaraps/neofetch' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🖼️  A command-line system information tool written in bash 3.2+' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/dylanaraps/neofetch/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install neofetch' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'neofetch',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'darwin:github.com/jhford/screenresolution',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) neofetch -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install neofetch' as const,
}

export type NeofetchPackage = typeof neofetchPackage
