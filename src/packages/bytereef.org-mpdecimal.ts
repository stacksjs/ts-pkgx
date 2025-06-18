/**
 * **mpdecimal** - pkgx package
 *
 * @domain `bytereef.org/mpdecimal`
 * @version `4.0.1` (5 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/bytereef-org/mpdecimal.md
 *
 * @install `sh <(curl https://pkgx.sh) +bytereef.org/mpdecimal -- $SHELL -i`
 * @aliases `mpdecimal`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mpdecimal
 * // Or access via domain
 * const samePkg = pantry.bytereeforgmpdecimal
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bytereef.org/mpdecimal"
 * console.log(pkg.versions[0]) // "4.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bytereef-org/mpdecimal.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpdecimalPackage = {
  /**
   * The display name of this package.
   */
  name: 'bytereef.org/mpdecimal' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bytereef.org/mpdecimal' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bytereef.org/mpdecimal/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +bytereef.org/mpdecimal -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.1',
    '4.0.0',
    '2.5.1',
    '2.5.0',
    '2.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mpdecimal',
  ] as const,
  fullPath: 'bytereef.org/mpdecimal' as const,
}

export type MpdecimalPackage = typeof mpdecimalPackage
