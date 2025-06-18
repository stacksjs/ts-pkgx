/**
 * **neovim.io** - Package from pantry: neovim.io
 *
 * @domain `neovim.io`
 *
 * @install `launchpad install neovim.io`
 * @dependencies `gnu.org/gettext^0`, `cmake.org`, `freedesktop.org/pkg-config^0.29`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.neovimio
 * console.log(pkg.name)        // "neovim.io"
 * console.log(pkg.description) // "Package from pantry: neovim.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/neovim-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const neovimioPackage = {
  /**
   * The display name of this package.
   */
  name: 'neovim.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'neovim.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: neovim.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install neovim.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0',
    'cmake.org',
    'freedesktop.org/pkg-config^0.29',
    'gnu.org/libtool^2',
    'git-scm.org^2',
    'info-zip.org/unzip',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/neovim.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NeovimioPackage = typeof neovimioPackage
