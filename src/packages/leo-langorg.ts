/**
 * **leo** - 🦁 The Leo Programming Language. A Programming Language for Formally Verified, Zero-Knowledge Applications
 *
 * @domain `leo-lang.org`
 * @programs `leo`
 * @version `2.7.1` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install leo`
 * @aliases `leo`
 * @dependencies `openssl.org^1.1`, `curl.se^8.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.leo
 * // Or access via domain
 * const samePkg = pantry.leolangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "leo-lang.org"
 * console.log(pkg.description) // "🦁 The Leo Programming Language. A Programming ..."
 * console.log(pkg.programs)    // ["leo"]
 * console.log(pkg.versions[0]) // "2.7.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leo-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leoPackage = {
  /**
   * The display name of this package.
   */
  name: 'leo-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leo-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🦁 The Leo Programming Language. A Programming Language for Formally Verified, Zero-Knowledge Applications' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leo-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/AleoHQ/leo' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install leo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'leo',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'curl.se^8.4',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.7.1',
    '2.7.0',
    '2.6.1',
    '2.6.0',
    '2.5.0',
    '2.4.1',
    '2.4.0',
    '2.3.1',
    '2.3.0',
    '2.2.0',
    '2.1.0',
    '2.0.0',
    '1.12.0',
    '1.11.0',
    '1.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'leo',
  ] as const,
}

export type LeoPackage = typeof leoPackage
