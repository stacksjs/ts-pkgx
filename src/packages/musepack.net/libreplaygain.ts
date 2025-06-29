/**
 * **musepack.net/libreplaygain** - pkgx package
 *
 * @domain `musepack.net/libreplaygain`
 * @version `475.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install musepack.net/libreplaygain`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.musepacknetlibreplaygain
 * console.log(pkg.name)        // "musepack.net/libreplaygain"
 * console.log(pkg.versions[0]) // "475.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musepack-net/libreplaygain.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const musepacknetlibreplaygainPackage = {
  /**
   * The display name of this package.
   */
  name: 'musepack.net/libreplaygain' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musepack.net/libreplaygain' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/musepack.net/libreplaygain/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install musepack.net/libreplaygain' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '475.0.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +musepack.net/libreplaygain -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install musepack.net/libreplaygain' as const,
}

export type MusepacknetlibreplaygainPackage = typeof musepacknetlibreplaygainPackage
