/**
 * **mesa-glu** - Package from pantry: freedesktop.org/mesa-glu
 *
 * @domain `freedesktop.org/mesa-glu`
 *
 * @install `launchpad install freedesktop.org/mesa-glu`
 * @dependencies `mesa3d.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgmesaglu
 * console.log(pkg.name)        // "mesa-glu"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/mesa-glu"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/mesa-glu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgmesagluPackage = {
  /**
   * The display name of this package.
   */
  name: 'mesa-glu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/mesa-glu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/mesa-glu' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/mesa-glu' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/mesa-glu -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/mesa-glu' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'mesa3d.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/mesa-glu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FreedesktoporgmesagluPackage = typeof freedesktoporgmesagluPackage
