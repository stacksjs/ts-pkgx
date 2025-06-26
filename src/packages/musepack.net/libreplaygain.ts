/**
 * **libreplaygain** - Package from pantry: musepack.net/libreplaygain
 *
 * @domain `musepack.net/libreplaygain`
 *
 * @install `launchpad install musepack.net/libreplaygain`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.musepacknetlibreplaygain
 * console.log(pkg.name)        // "libreplaygain"
 * console.log(pkg.description) // "Package from pantry: musepack.net/libreplaygain"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musepack-net/libreplaygain.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const musepacknetlibreplaygainPackage = {
  /**
   * The display name of this package.
   */
  name: 'libreplaygain' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musepack.net/libreplaygain' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: musepack.net/libreplaygain' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install musepack.net/libreplaygain' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +musepack.net/libreplaygain -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install musepack.net/libreplaygain' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/musepack.net/libreplaygain/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MusepacknetlibreplaygainPackage = typeof musepacknetlibreplaygainPackage
