/**
 * **mesa3d.org** - pkgx package
 *
 * @domain `mesa3d.org`
 * @version `25.1.3` (54 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/mesa3d-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +mesa3d.org -- $SHELL -i`
 * @dependencies `libexpat.github.io`, `x.org/x11`, `x.org/xcb`, ... (+23 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mesa3dorg
 * console.log(pkg.name)        // "mesa3d.org"
 * console.log(pkg.versions[0]) // "25.1.3" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mesa3d.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +mesa3d.org -- $SHELL -i' as const,
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
    'darwingnu.org/gettext',
    'gnu.org/gettext',
    'linuxgnome.org/libxml2~2.13elfutils.orgkhronos.org/glslanginfo-zip.org/zipdri.freedesktop.org^2.4.110intel.com/libvafreedesktop.org/vdpaux.org/xfixesx.org/xshmfencex.org/xvx.org/xxf86vmllvm.orggithub.com/lm-sensors/lm-sensorswayland.freedesktop.orgwayland.freedesktop.org/protocols',
    'gnome.org/libxml2~2.13',
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
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '25.1.3',
    '25.1.2',
    '25.1.1',
    '25.1.0',
    '25.0.7',
    '25.0.6',
    '25.0.5',
    '25.0.4',
    '25.0.3',
    '25.0.2',
    '25.0.1',
    '25.0.0',
    '24.3.4',
    '24.3.3',
    '24.3.2',
    '24.3.1',
    '24.3.0',
    '24.2.8',
    '24.2.7',
    '24.2.6',
    '24.2.5',
    '24.2.4',
    '24.2.3',
    '24.2.2',
    '24.2.1',
    '24.2.0',
    '24.1.7',
    '24.1.6',
    '24.1.5',
    '24.1.4',
    '24.1.3',
    '24.1.2',
    '24.1.1',
    '24.1.0',
    '24.0.9',
    '24.0.8',
    '24.0.7',
    '24.0.6',
    '24.0.5',
    '24.0.4',
    '24.0.3',
    '24.0.2',
    '24.0.1',
    '24.0.0',
    '23.3.6',
    '23.3.5',
    '23.3.4',
    '23.3.3',
    '23.3.2',
    '23.3.1',
    '23.3.0',
    '23.2.1',
    '23.1.8',
    '23.1.7',
  ] as const,
  aliases: [] as const,
  fullPath: 'mesa3d.org' as const,
}

export type Mesa3dorgPackage = typeof mesa3dorgPackage
