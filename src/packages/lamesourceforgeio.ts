/**
 * **lame** - High quality MPEG Audio Layer III (MP3) encoder
 *
 * @domain `lame.sourceforge.io`
 * @programs `lame`
 * @version `3.100.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lame`
 * @aliases `lame`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.lame
 * // Or access via domain
 * const samePkg = pantry.lamesourceforgeio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lame.sourceforge.io"
 * console.log(pkg.description) // "High quality MPEG Audio Layer III (MP3) encoder"
 * console.log(pkg.programs)    // ["lame"]
 * console.log(pkg.versions[0]) // "3.100.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lame-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lamePackage = {
  /**
   * The display name of this package.
   */
  name: 'lame.sourceforge.io' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lame' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'lame',
  ] as const,
}

export type LamePackage = typeof lamePackage
