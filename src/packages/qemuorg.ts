/**
 * **qemu.org** - Package from pantry: qemu.org
 *
 * @domain `qemu.org`
 *
 * @install `launchpad install qemu.org`
 * @dependencies `gnome.org/glib@2`, `capstone-engine.org^4`, `pixman.org^0`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.qemuorg
 * console.log(pkg.name)        // "qemu.org"
 * console.log(pkg.description) // "Package from pantry: qemu.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/qemu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const qemuorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'qemu.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'qemu.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: qemu.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install qemu.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +qemu.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install qemu.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
    'capstone-engine.org^4',
    'pixman.org^0',
    'gnutls.org^3',
    'freedesktop.org/slirp^4',
    'virtualsquare.org/vde^2',
    'facebook.com/zstd^1',
    'invisible-island.net/ncurses^6',
    'libssh.org^0',
    'libpng.org^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/qemu.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type QemuorgPackage = typeof qemuorgPackage
