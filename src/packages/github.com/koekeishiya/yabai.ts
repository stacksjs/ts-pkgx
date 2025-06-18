/**
 * **yabai** - A tiling window manager for macOS based on binary space partitioning
 *
 * @domain `github.com/koekeishiya/yabai`
 * @programs `yabai`
 * @version `7.1.15` (30 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) yabai`
 * @name `yabai`
 * @aliases `koekeishiya/yabai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yabai
 * // Or access via domain
 * const samePkg = pantry.githubcomkoekeishiyayabai
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yabai"
 * console.log(pkg.description) // "A tiling window manager for macOS based on bina..."
 * console.log(pkg.programs)    // ["yabai"]
 * console.log(pkg.versions[0]) // "7.1.15" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/koekeishiya/yabai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yabaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'yabai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/koekeishiya/yabai' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tiling window manager for macOS based on binary space partitioning' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/koekeishiya/yabai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) yabai' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yabai',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.1.15',
    '7.1.14',
    '7.1.13',
    '7.1.12',
    '7.1.11',
    '7.1.10',
    '7.1.9',
    '7.1.8',
    '7.1.7',
    '7.1.6',
    '7.1.5',
    '7.1.4',
    '7.1.3',
    '7.1.2',
    '7.1.1',
    '7.1.0',
    '7.0.4',
    '7.0.3',
    '7.0.2',
    '7.0.1',
    '7.0.0',
    '6.0.15',
    '6.0.14',
    '6.0.13',
    '6.0.12',
    '6.0.11',
    '6.0.10',
    '6.0.9',
    '6.0.8',
    '6.0.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'koekeishiya/yabai',
  ] as const,
  fullPath: 'github.com/koekeishiya/yabai' as const,
}

export type YabaiPackage = typeof yabaiPackage
