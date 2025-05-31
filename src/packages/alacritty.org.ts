/**
 * **alacritty** - A cross-platform, OpenGL terminal emulator.
 *
 * @domain `alacritty.org`
 * @programs `alacritty`
 * @version `0.15.1` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/alacritty-org.md
 * @install `sh <(curl https://pkgx.sh) alacritty`
 * @dependencies `linuxfreetype.orgfreedesktop.org/fontconfig`, `freetype.org`, `freedesktop.org/fontconfig`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.alacrittyorg
 * console.log(pkg.name)        // "alacritty"
 * console.log(pkg.description) // "A cross-platform, OpenGL terminal emulator."
 * console.log(pkg.programs)    // ["alacritty"]
 * console.log(pkg.versions[0]) // "0.15.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/alacritty-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alacrittyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'alacritty' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'alacritty.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A cross-platform, OpenGL terminal emulator.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/alacritty.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) alacritty' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'alacritty',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxfreetype.orgfreedesktop.org/fontconfig',
    'freetype.org',
    'freedesktop.org/fontconfig',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.15.1',
    '0.15.0',
    '0.14.0',
    '0.13.2',
  ] as const,
  fullPath: 'alacritty.org' as const,
  aliases: [] as const,
}

export type AlacrittyorgPackage = typeof alacrittyorgPackage
