/**
 * **mesa3d.org** - Package from pantry: mesa3d.org
 *
 * @domain `mesa3d.org`
 *
 * @install `launchpad install mesa3d.org`
 * @dependencies `libexpat.github.io`, `x.org/x11`, `x.org/xcb`, ... (+36 more)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mesa3d.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
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
    'gnu.org/gettext',
    'gnome.org/libxml2~2.13 # since 25.0.3, 2.14 changed the API version',
    'elfutils.org',
    'khronos.org/glslang',
    'info-zip.org/zip',
    'dri.freedesktop.org^2.4.110',
    'intel.com/libva',
    'freedesktop.org/vdpau',
    'x.org/xfixes',
    'x.org/xshmfence',
    'x.org/xv',
    'x.org/xxf86vm',
    'llvm.org',
    'github.com/lm-sensors/lm-sensors',
    'wayland.freedesktop.org',
    'wayland.freedesktop.org/protocols',
    'gnu.org/bison',
    'mesonbuild.com',
    'ninja-build.org',
    'freedesktop.org/pkg-config',
    'pygments.org',
    'python.org~3.11',
    'x.org/protocol',
    'github.com/westes/flex',
    'llvm.org',
    'curl.se',
    'cmake.org^3 # since 24.3',
    'rust-lang.org',
    'rust-lang.org/rust-bindgen',
    'freedesktop.org/pkg-config',
    'gnu.org/gcc/libstdcxx',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mesa3d.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Mesa3dorgPackage = typeof mesa3dorgPackage
