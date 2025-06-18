/**
 * **poppler-data** - pkgx package
 *
 * @domain `poppler.freedesktop.org/poppler-data`
 * @version `0.4.12` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org/poppler-data.md
 *
 * @install `sh <(curl https://pkgx.sh) +poppler.freedesktop.org/poppler-data -- $SHELL -i`
 * @aliases `poppler-data`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.popplerdata
 * // Or access via domain
 * const samePkg = pantry.popplerfreedesktoporgpopplerdata
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "poppler.freedesktop.org/poppler-data"
 * console.log(pkg.versions[0]) // "0.4.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org/poppler-data.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const popplerdataPackage = {
  /**
   * The display name of this package.
   */
  name: 'poppler.freedesktop.org/poppler-data' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'poppler.freedesktop.org/poppler-data' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from poppler.freedesktop.org/poppler-data' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/poppler.freedesktop.org/poppler-data/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +poppler.freedesktop.org/poppler-data -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.12',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'poppler-data',
  ] as const,
  fullPath: 'poppler.freedesktop.org/poppler-data' as const,
}

export type PopplerdataPackage = typeof popplerdataPackage
