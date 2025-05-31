/**
 * **leo** - 🦁 The Leo Programming Language. A Programming Language for Formally Verified, Zero-Knowledge Applications
 *
 * @domain `leo-lang.org`
 * @programs `leo`
 * @version `2.6.1` (13 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/leo-lang-org.md
 * @install `sh <(curl https://pkgx.sh) leo`
 * @dependencies `openssl.org^1.1`, `curl.se^8.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leo-langorg
 * console.log(pkg.name)        // "leo"
 * console.log(pkg.description) // "🦁 The Leo Programming Language. A Programming ..."
 * console.log(pkg.programs)    // ["leo"]
 * console.log(pkg.versions[0]) // "2.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leo-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leolangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'leo' as const,
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
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) leo' as const,
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
  fullPath: 'leo-lang.org' as const,
  aliases: [] as const,
}

export type LeolangorgPackage = typeof leolangorgPackage
