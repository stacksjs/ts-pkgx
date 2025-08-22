/**
 * **pake** - 🤱🏻 Turn any webpage into a desktop app with Rust.  🤱🏻 利用 Rust 轻松构建轻量级多端桌面应用
 *
 * @domain `npmjs.com/pake-cli`
 * @programs `pake`
 * @version `3.2.16` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pake`
 * @name `pake`
 * @dependencies `nodejs.org>=16`, `npmjs.com`, `rust-lang.org>=1.63`, ... (+11 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pake
 * // Or access via domain
 * const samePkg = pantry.npmjscompakecli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pake"
 * console.log(pkg.description) // "🤱🏻 Turn any webpage into a desktop app with R..."
 * console.log(pkg.programs)    // ["pake"]
 * console.log(pkg.versions[0]) // "3.2.16" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/npmjs-com/pake-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pakePackage = {
  /**
   * The display name of this package.
   */
  name: 'pake' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'npmjs.com/pake-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🤱🏻 Turn any webpage into a desktop app with Rust.  🤱🏻 利用 Rust 轻松构建轻量级多端桌面应用' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/npmjs.com/pake-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pake' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pake',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'nodejs.org>=16',
    'npmjs.com',
    'rust-lang.org>=1.63',
    'rust-lang.org/cargo',
    'darwin:github.com/create-dmg/create-dmg@1',
    'linux:freedesktop.org/pkg-config^0.29',
    'linux:cairographics.org@1',
    'linux:gnome.org/pango@1',
    'linux:gnome.org/gdk-pixbuf@2',
    'linux:gnome.org/atk@2',
    'linux:libsoup.org~2.74',
    'linux:gnome.org/librsvg@2',
    'linux:gnome.org/vala@0',
    'linux:gtk.org/gtk3@3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.2.16',
    '3.2.14',
    '3.1.1',
    '3.0.3',
    '2.6.0',
    '2.5.1',
    '2.5.0',
    '2.3.6',
    '2.3.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pake -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pake' as const,
}

export type PakePackage = typeof pakePackage
