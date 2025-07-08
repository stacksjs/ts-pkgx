/**
 * **dri.freedesktop.org** - Package from pantry: dri.freedesktop.org
 *
 * @domain `dri.freedesktop.org`
 *
 * @install `launchpad install dri.freedesktop.org`
 * @dependencies `x.org/pciaccess`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.drifreedesktoporg
 * console.log(pkg.name)        // "dri.freedesktop.org"
 * console.log(pkg.description) // "Package from pantry: dri.freedesktop.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dri-freedesktop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const drifreedesktoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'dri.freedesktop.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dri.freedesktop.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dri.freedesktop.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dri.freedesktop.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dri.freedesktop.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dri.freedesktop.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/pciaccess',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dri.freedesktop.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DrifreedesktoporgPackage = typeof drifreedesktoporgPackage
