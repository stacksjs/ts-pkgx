/**
 * **icon-theme** - pkgx package
 *
 * @domain `freedesktop.org/icon-theme`
 *
 * @install `launchpad install freedesktop.org/icon-theme`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgicontheme
 * console.log(pkg.name)        // "icon-theme"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/icon-theme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgiconthemePackage = {
  /**
   * The display name of this package.
   */
  name: 'icon-theme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/icon-theme' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/icon-theme' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/icon-theme -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/icon-theme' as const,
}

export type FreedesktoporgiconthemePackage = typeof freedesktoporgiconthemePackage
