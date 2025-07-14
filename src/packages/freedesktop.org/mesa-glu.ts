/**
 * **freedesktop.org/mesa-glu** - pkgx package
 *
 * @domain `freedesktop.org/mesa-glu`
 * @version `9.0.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install freedesktop.org/mesa-glu`
 * @dependencies `mesa3d.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgmesaglu
 * console.log(pkg.name)        // "freedesktop.org/mesa-glu"
 * console.log(pkg.versions[0]) // "9.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/mesa-glu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgmesagluPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/mesa-glu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/mesa-glu' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/mesa-glu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/mesa-glu' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'mesa3d.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.0.3',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/mesa-glu -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/mesa-glu' as const,
}

export type FreedesktoporgmesagluPackage = typeof freedesktoporgmesagluPackage
