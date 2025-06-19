/**
 * **libbsd** - BSD compatibility library (mirror)
 *
 * @domain `freedesktop.org/libbsd`
 * @version `0.11.7` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +freedesktop.org/libbsd -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporglibbsd
 * console.log(pkg.name)        // "libbsd"
 * console.log(pkg.description) // "BSD compatibility library (mirror)"
 * console.log(pkg.versions[0]) // "0.11.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/libbsd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporglibbsdPackage = {
  /**
   * The display name of this package.
   */
  name: 'libbsd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/libbsd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'BSD compatibility library (mirror)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/libbsd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +freedesktop.org/libbsd -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.7',
  ] as const,
  aliases: [] as const,
}

export type FreedesktoporglibbsdPackage = typeof freedesktoporglibbsdPackage
