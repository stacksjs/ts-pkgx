/**
 * **SketchyBar** - Package from pantry: felixkratz.github.io/SketchyBar
 *
 * @domain `felixkratz.github.io/SketchyBar`
 *
 * @install `launchpad install felixkratz.github.io/SketchyBar`
 * @dependencies `github.com/koekeishiya/yabai`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.felixkratzgithubiosketchybar
 * console.log(pkg.name)        // "SketchyBar"
 * console.log(pkg.description) // "Package from pantry: felixkratz.github.io/Sketc..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/felixkratz-github-io/SketchyBar.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const felixkratzgithubiosketchybarPackage = {
  /**
   * The display name of this package.
   */
  name: 'SketchyBar' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'felixkratz.github.io/SketchyBar' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: felixkratz.github.io/SketchyBar' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install felixkratz.github.io/SketchyBar' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +felixkratz.github.io/SketchyBar -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install felixkratz.github.io/SketchyBar' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/koekeishiya/yabai',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/felixkratz.github.io/SketchyBar/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FelixkratzgithubiosketchybarPackage = typeof felixkratzgithubiosketchybarPackage
