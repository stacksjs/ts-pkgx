/**
 * **libva** - Package from pantry: intel.com/libva
 *
 * @domain `intel.com/libva`
 *
 * @install `launchpad install intel.com/libva`
 * @dependencies `dri.freedesktop.org`, `x.org/x11`, `x.org/exts`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.intelcomlibva
 * console.log(pkg.name)        // "libva"
 * console.log(pkg.description) // "Package from pantry: intel.com/libva"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/intel-com/libva.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const intelcomlibvaPackage = {
  /**
   * The display name of this package.
   */
  name: 'libva' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'intel.com/libva' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: intel.com/libva' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install intel.com/libva' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +intel.com/libva -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install intel.com/libva' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/intel.com/libva/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IntelcomlibvaPackage = typeof intelcomlibvaPackage
