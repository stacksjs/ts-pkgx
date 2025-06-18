/**
 * **ktlint** - An anti-bikeshedding Kotlin linter with built-in formatter
 *
 * @domain `ktlint.github.io`
 * @programs `ktlint`
 * @version `1.6.0` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) ktlint`
 * @name `ktlint`
 * @dependencies `openjdk.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ktlint
 * // Or access via domain
 * const samePkg = pantry.ktlintgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ktlint"
 * console.log(pkg.description) // "An anti-bikeshedding Kotlin linter with built-i..."
 * console.log(pkg.programs)    // ["ktlint"]
 * console.log(pkg.versions[0]) // "1.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ktlint-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ktlintPackage = {
  /**
   * The display name of this package.
   */
  name: 'ktlint' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ktlint.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An anti-bikeshedding Kotlin linter with built-in formatter' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ktlint.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) ktlint' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ktlint',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.6.0',
    '1.5.0',
    '1.4.1',
    '1.4.0',
    '1.3.1',
    '1.3.0',
    '1.2.1',
    '1.2.0',
    '1.1.1',
    '0.49.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'ktlint' as const,
}

export type KtlintPackage = typeof ktlintPackage
