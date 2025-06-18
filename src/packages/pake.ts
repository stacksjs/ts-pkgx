/**
 * **pake** - 🤱🏻 Turn any webpage into a desktop app with Rust.  🤱🏻 利用 Rust 轻松构建轻量级多端桌面应用
 *
 * @domain `npmjs.com/pake-cli`
 * @programs `pake`
 * @version `3.1.1` (7 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/npmjs-com/pake-cli.md
 *
 * @install `sh <(curl https://pkgx.sh) pake`
 * @name `pake`
 * @aliases `pake-cli`
 * @dependencies `nodejs.org>=16`, `npmjs.com`, `rust-lang.org>=1.63`, ... (+13 more)
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
 * console.log(pkg.versions[0]) // "3.1.1" (latest)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pake' as const,
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
   */
  dependencies: [
    'nodejs.org>=16',
    'npmjs.com',
    'rust-lang.org>=1.63',
    'rust-lang.org/cargo',
    'darwingithub.com/create-dmg/create-dmg@1',
    'github.com/create-dmg/create-dmg@1',
    'linuxfreedesktop.org/pkg-config^0.29cairographics.org@1gnome.org/pango@1gnome.org/gdk-pixbuf@2gnome.org/atk@2libsoup.org~2.74gnome.org/librsvg@2gnome.org/vala@0gtk.org/gtk3@3',
    'freedesktop.org/pkg-config^0.29',
    'cairographics.org@1',
    'gnome.org/pango@1',
    'gnome.org/gdk-pixbuf@2',
    'gnome.org/atk@2',
    'libsoup.org~2.74',
    'gnome.org/librsvg@2',
    'gnome.org/vala@0',
    'gtk.org/gtk3@3',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
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
  aliases: [
    'pake-cli',
  ] as const,
  fullPath: 'npmjs.com/pake-cli' as const,
}

export type PakePackage = typeof pakePackage
