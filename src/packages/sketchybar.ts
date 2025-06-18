/**
 * **sketchybar** - A highly customizable macOS status bar replacement
 *
 * @domain `felixkratz.github.io/SketchyBar`
 * @programs `sketchybar`
 * @version `2.22.1` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/felixkratz-github-io/SketchyBar.md
 *
 * @install `sh <(curl https://pkgx.sh) sketchybar`
 * @name `sketchybar`
 * @aliases `SketchyBar`
 * @dependencies `github.com/koekeishiya/yabai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sketchybar
 * // Or access via domain
 * const samePkg = pantry.felixkratzgithubiosketchybar
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sketchybar"
 * console.log(pkg.description) // "A highly customizable macOS status bar replacement"
 * console.log(pkg.programs)    // ["sketchybar"]
 * console.log(pkg.versions[0]) // "2.22.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/felixkratz-github-io/SketchyBar.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sketchybarPackage = {
  /**
   * The display name of this package.
   */
  name: 'sketchybar' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'felixkratz.github.io/SketchyBar' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A highly customizable macOS status bar replacement' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/felixkratz.github.io/SketchyBar/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sketchybar' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sketchybar',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/koekeishiya/yabai',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.22.1',
    '2.22.0',
    '2.21.0',
    '2.20.1',
    '2.20.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'SketchyBar',
  ] as const,
  fullPath: 'felixkratz.github.io/SketchyBar' as const,
}

export type SketchybarPackage = typeof sketchybarPackage
