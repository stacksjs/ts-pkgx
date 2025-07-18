/**
 * **skhd** - Simple hotkey daemon for macOS
 *
 * @domain `github.com/koekeishiya/skhd`
 * @programs `skhd`
 * @version `0.3.9` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install skhd`
 * @name `skhd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.skhd
 * // Or access via domain
 * const samePkg = pantry.githubcomkoekeishiyaskhd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "skhd"
 * console.log(pkg.description) // "Simple hotkey daemon for macOS"
 * console.log(pkg.programs)    // ["skhd"]
 * console.log(pkg.versions[0]) // "0.3.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/koekeishiya/skhd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const skhdPackage = {
  /**
   * The display name of this package.
   */
  name: 'skhd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/koekeishiya/skhd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Simple hotkey daemon for macOS' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/koekeishiya/skhd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install skhd' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'skhd',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) skhd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install skhd' as const,
}

export type SkhdPackage = typeof skhdPackage
