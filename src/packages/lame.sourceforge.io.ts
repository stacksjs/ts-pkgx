/**
 * **lame** - High quality MPEG Audio Layer III (MP3) encoder
 *
 * @domain `lame.sourceforge.io`
 * @programs `lame`
 * @version `3.100.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/lame-sourceforge-io.md
 * @install `sh <(curl https://pkgx.sh) lame`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lamesourceforgeio
 * console.log(pkg.name)        // "lame"
 * console.log(pkg.description) // "High quality MPEG Audio Layer III (MP3) encoder"
 * console.log(pkg.programs)    // ["lame"]
 * console.log(pkg.versions[0]) // "3.100.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lame-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lamesourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'lame' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lame.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'High quality MPEG Audio Layer III (MP3) encoder' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lame.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) lame' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lame',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.100.0',
  ] as const,
  fullPath: 'lame.sourceforge.io' as const,
  aliases: [] as const,
}

export type LamesourceforgeioPackage = typeof lamesourceforgeioPackage
