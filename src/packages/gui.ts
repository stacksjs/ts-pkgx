/**
 * **gui** - pkgx package
 *
 * @domain `tea.xyz/gui`
 *
 * @install `pkgx tea.xyz/gui`
 * @name `gui`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gui
 * // Or access via domain
 * const samePkg = pantry.teaxyzgui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gui"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tea-xyz/gui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const guiPackage = {
  /**
   * The display name of this package.
   */
  name: 'gui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tea.xyz/gui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from tea.xyz/gui' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tea.xyz/gui' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'tea.xyz/gui' as const,
}

export type GuiPackage = typeof guiPackage
