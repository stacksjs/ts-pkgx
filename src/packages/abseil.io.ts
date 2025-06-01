/**
 * **+abseil.io -- $SHELL -i** - Abseil Common Libraries (C++)
 *
 * @domain `abseil.io`
 * @version `20250512.0.0` (17 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/abseil-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +abseil.io -- $SHELL -i`
 * @aliases `+abseil.io -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.abseilioSHELLi
 * // Or access via domain
 * const samePkg = pantry.abseilio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "abseil.io"
 * console.log(pkg.description) // "Abseil Common Libraries (C++)"
 * console.log(pkg.versions[0]) // "20250512.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/abseil-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const abseilioSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'abseil.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'abseil.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Abseil Common Libraries (C++)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/abseil.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +abseil.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '20250512.0.0',
    '20250127.1.0',
    '20250127.0.0',
    '20240722.1.0',
    '20240722.0.0',
    '20240116.3.0',
    '20240116.2.0',
    '20240116.1.0',
    '20240116.0.0',
    '20230802.3.0',
    '20230802.2.0',
    '20230802.1.0',
    '20230802.0.0',
    '20230125.4.0',
    '20230125.3.0',
    '20230125.2.0',
    '20220623.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+abseil.io -- $SHELL -i',
  ] as const,
  fullPath: 'abseil.io' as const,
}

export type AbseilioSHELLiPackage = typeof abseilioSHELLiPackage
