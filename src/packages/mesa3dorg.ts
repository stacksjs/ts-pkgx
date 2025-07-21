/**
 * **mesa3d.org** - Package from pantry: mesa3d.org
 *
 * @domain `mesa3d.org`
 *
 * @install `launchpad install mesa3d.org`
 * @dependencies `libexpat.github.io`, `x.org/x11`, `x.org/xcb`, ... (+21 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mesa3dorg
 * console.log(pkg.name)        // "mesa3d.org"
 * console.log(pkg.description) // "Package from pantry: mesa3d.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mesa3d-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mesa3dorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mesa3d.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mesa3d.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mesa3d.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mesa3d.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mesa3d.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mesa3d.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libexpat.github.io',
    'x.org/x11',
    'x.org/xcb',
    'x.org/xdamage',
    'x.org/exts',
    'invisible-island.net/ncurses',
    'zlib.net',
    'x.org/xrandr',
    'darwin:gnu.org/gettext',
    'linux:gnome.org/libxml2~2.13 # since 25.0.3, 2.14 changed the API version',
    'linux:elfutils.org',
    'linux:khronos.org/glslang',
    'linux:info-zip.org/zip',
    'linux:dri.freedesktop.org^2.4.110',
    'linux:intel.com/libva',
    'linux:freedesktop.org/vdpau',
    'linux:x.org/xfixes',
    'linux:x.org/xshmfence',
    'linux:x.org/xv',
    'linux:x.org/xxf86vm',
    'linux:llvm.org',
    'linux:github.com/lm-sensors/lm-sensors',
    'linux:wayland.freedesktop.org',
    'linux:wayland.freedesktop.org/protocols',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mesa3d.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Mesa3dorgPackage = typeof mesa3dorgPackage
