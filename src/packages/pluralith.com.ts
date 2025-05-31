/**
 * **pluralith** - A tool for Terraform state visualisation and automated generation of infrastructure documentation
 *
 * @domain `pluralith.com`
 * @programs `pluralith`
 * @version `0.2.2` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/pluralith-com.md
 * @install `sh <(curl https://pkgx.sh) pluralith`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pluralithcom
 * console.log(pkg.name)        // "pluralith"
 * console.log(pkg.description) // "A tool for Terraform state visualisation and au..."
 * console.log(pkg.programs)    // ["pluralith"]
 * console.log(pkg.versions[0]) // "0.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pluralith-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pluralithcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'pluralith' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pluralith.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A tool for Terraform state visualisation and automated generation of infrastructure documentation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pluralith.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pluralith' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pluralith',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.2',
  ] as const,
  fullPath: 'pluralith.com' as const,
  aliases: [] as const,
}

export type PluralithcomPackage = typeof pluralithcomPackage
