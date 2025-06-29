/**
 * **pake-cli** - Package from pantry: npmjs.com/pake-cli
 *
 * @domain `npmjs.com/pake-cli`
 *
 * @install `launchpad install npmjs.com/pake-cli`
 * @dependencies `nodejs.org>=16`, `npmjs.com`, `rust-lang.org>=1.63`, ... (+11 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.npmjscompakecli
 * console.log(pkg.name)        // "pake-cli"
 * console.log(pkg.description) // "Package from pantry: npmjs.com/pake-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/npmjs-com/pake-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const npmjscompakecliPackage = {
  /**
   * The display name of this package.
   */
  name: 'pake-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'npmjs.com/pake-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: npmjs.com/pake-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install npmjs.com/pake-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +npmjs.com/pake-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install npmjs.com/pake-cli' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/npmjs.com/pake-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NpmjscompakecliPackage = typeof npmjscompakecliPackage
