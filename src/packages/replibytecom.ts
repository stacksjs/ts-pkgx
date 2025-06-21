/**
 * **replibyte** - Seed your development database with real data ⚡️
 *
 * @domain `replibyte.com`
 * @programs `replibyte`
 * @version `0.10.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install replibyte`
 * @aliases `replibyte`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.replibyte
 * // Or access via domain
 * const samePkg = pantry.replibytecom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "replibyte.com"
 * console.log(pkg.description) // "Seed your development database with real data ⚡️"
 * console.log(pkg.programs)    // ["replibyte"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/replibyte-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const replibytePackage = {
  /**
   * The display name of this package.
   */
  name: 'replibyte.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'replibyte.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Seed your development database with real data ⚡️' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/replibyte.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install replibyte' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'replibyte',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'replibyte',
  ] as const,
}

export type ReplibytePackage = typeof replibytePackage
