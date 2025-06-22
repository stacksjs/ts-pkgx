/**
 * **tea-package-builder** - Tea Package Builder is a tool that helps create packages for Tea.xyz quickly and conveniently
 *
 * @domain `github.com/ArionThinker/tea-package-builder`
 * @programs `tea-package-builder`
 * @version `0.1.6` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tea-package-builder`
 * @name `tea-package-builder`
 * @dependencies `linux:ffmpeg.org`, `linux:gnome.org/gobject-introspection`, `linux:gnome.org/glib^2` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.teapackagebuilder
 * // Or access via domain
 * const samePkg = pantry.githubcomarionthinkerteapackagebuilder
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tea-package-builder"
 * console.log(pkg.description) // "Tea Package Builder is a tool that helps create..."
 * console.log(pkg.programs)    // ["tea-package-builder"]
 * console.log(pkg.versions[0]) // "0.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ArionThinker/tea-package-builder.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const teapackagebuilderPackage = {
  /**
   * The display name of this package.
   */
  name: 'tea-package-builder' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ArionThinker/tea-package-builder' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tea Package Builder is a tool that helps create packages for Tea.xyz quickly and conveniently' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ArionThinker/tea-package-builder/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tea-package-builder' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tea-package-builder',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:ffmpeg.org',
    'linux:gnome.org/gobject-introspection',
    'linux:gnome.org/glib^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.6',
    '0.1.5',
    '0.1.4',
    '0.1.3',
    '0.1.2',
    '0.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) tea-package-builder -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tea-package-builder' as const,
}

export type TeapackagebuilderPackage = typeof teapackagebuilderPackage
