/**
 * **litecli** - CLI for SQLite Databases with auto-completion and syntax highlighting
 *
 * @domain `litecli.com`
 * @programs `litecli`
 * @version `1.15.0` (15 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/litecli-com.md
 *
 * @install `sh <(curl https://pkgx.sh) litecli`
 * @dependencies `pkgx.sh^1`, `sqlite.org^3.45`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.liteclicom
 * console.log(pkg.name)        // "litecli"
 * console.log(pkg.description) // "CLI for SQLite Databases with auto-completion a..."
 * console.log(pkg.programs)    // ["litecli"]
 * console.log(pkg.versions[0]) // "1.15.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/litecli-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liteclicomPackage = {
  /**
   * The display name of this package.
   */
  name: 'litecli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'litecli.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI for SQLite Databases with auto-completion and syntax highlighting' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/litecli.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) litecli' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'litecli',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'sqlite.org^3.45',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.15.0',
    '1.14.4',
    '1.14.3',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.2',
    '1.13.0',
    '1.12.4',
    '1.12.3',
    '1.12.2',
    '1.11.1',
    '1.11.0',
    '1.10.1',
    '1.10.0',
  ] as const,
  fullPath: 'litecli.com' as const,
  aliases: [] as const,
}

export type LiteclicomPackage = typeof liteclicomPackage
