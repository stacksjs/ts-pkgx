/**
 * **intel.com/libva** - Libva is an implementation for VA-API (Video Acceleration API)
 *
 * @domain `intel.com/libva`
 * @version `2.22.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install intel.com/libva`
 * @dependencies `dri.freedesktop.org`, `x.org/x11`, `x.org/exts`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.intelcomlibva
 * console.log(pkg.name)        // "intel.com/libva"
 * console.log(pkg.description) // "Libva is an implementation for VA-API (Video Ac..."
 * console.log(pkg.versions[0]) // "2.22.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/intel-com/libva.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const intelcomlibvaPackage = {
  /**
   * The display name of this package.
   */
  name: 'intel.com/libva' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'intel.com/libva' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Libva is an implementation for VA-API (Video Acceleration API)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/intel.com/libva/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install intel.com/libva' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'dri.freedesktop.org',
    'x.org/x11',
    'x.org/exts',
    'x.org/xfixes',
    'wayland.freedesktop.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.22.0',
    '2.21.0',
    '2.20.0',
    '2.19.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +intel.com/libva -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install intel.com/libva' as const,
}

export type IntelcomlibvaPackage = typeof intelcomlibvaPackage
