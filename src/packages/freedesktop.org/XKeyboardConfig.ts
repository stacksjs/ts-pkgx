/**
 * **XKeyboardConfig** - Package from pantry: freedesktop.org/XKeyboardConfig
 *
 * @domain `freedesktop.org/XKeyboardConfig`
 *
 * @install `launchpad install freedesktop.org/XKeyboardConfig`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgxkeyboardconfig
 * console.log(pkg.name)        // "XKeyboardConfig"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/XKeyboardC..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/XKeyboardConfig.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgxkeyboardconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'XKeyboardConfig' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/XKeyboardConfig' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/XKeyboardConfig' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/XKeyboardConfig' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/XKeyboardConfig -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/XKeyboardConfig' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/XKeyboardConfig/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgxkeyboardconfigPackage = typeof freedesktoporgxkeyboardconfigPackage
