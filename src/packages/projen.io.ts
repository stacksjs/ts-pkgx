/**
 * **projen** - Rapidly build modern applications with advanced configuration management
 *
 * @domain `projen.io`
 * @programs `projen`
 * @version `0.92.10` (37 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/projen-io.md
 *
 * @install `sh <(curl https://pkgx.sh) projen`
 * @name `projen`
 * @dependencies `nodejs.org^22 || ^20 || ^18`
 * @companions `git-scm.org`, `classic.yarnpkg.com`, `maven.apache.org`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.projen
 * // Or access via domain
 * const samePkg = pantry.projenio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "projen"
 * console.log(pkg.description) // "Rapidly build modern applications with advanced..."
 * console.log(pkg.programs)    // ["projen"]
 * console.log(pkg.versions[0]) // "0.92.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/projen-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const projenPackage = {
  /**
   * The display name of this package.
   */
  name: 'projen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'projen.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Rapidly build modern applications with advanced configuration management' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/projen.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) projen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'projen',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'git-scm.org',
    'classic.yarnpkg.com',
    'maven.apache.org',
    'python.org',
    'go.dev',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^22 || ^20 || ^18',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.92.10',
    '0.92.9',
    '0.92.8',
    '0.92.7',
    '0.92.6',
    '0.92.5',
    '0.92.4',
    '0.92.3',
    '0.92.2',
    '0.92.1',
    '0.92.0',
    '0.91.31',
    '0.91.30',
    '0.91.29',
    '0.91.28',
    '0.91.27',
    '0.91.26',
    '0.91.25',
    '0.91.24',
    '0.91.23',
    '0.91.22',
    '0.91.21',
    '0.91.20',
    '0.91.19',
    '0.91.18',
    '0.91.17',
    '0.91.16',
    '0.91.15',
    '0.91.14',
    '0.91.13',
    '0.91.12',
    '0.91.11',
    '0.91.10',
    '0.91.9',
    '0.91.8',
    '0.91.7',
    '0.91.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'projen.io' as const,
}

export type ProjenPackage = typeof projenPackage
