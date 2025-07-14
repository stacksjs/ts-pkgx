/**
 * **libcuefile** - Package from pantry: musepack.net/libcuefile
 *
 * @domain `musepack.net/libcuefile`
 *
 * @install `launchpad install musepack.net/libcuefile`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.musepacknetlibcuefile
 * console.log(pkg.name)        // "libcuefile"
 * console.log(pkg.description) // "Package from pantry: musepack.net/libcuefile"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musepack-net/libcuefile.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const musepacknetlibcuefilePackage = {
  /**
   * The display name of this package.
   */
  name: 'libcuefile' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musepack.net/libcuefile' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: musepack.net/libcuefile' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install musepack.net/libcuefile' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +musepack.net/libcuefile -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install musepack.net/libcuefile' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/musepack.net/libcuefile/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MusepacknetlibcuefilePackage = typeof musepacknetlibcuefilePackage
