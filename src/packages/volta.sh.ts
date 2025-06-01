/**
 * **volta** - JavaScript toolchain manager for reproducible environments
 *
 * @domain `volta.sh`
 * @programs `volta`
 * @version `2.0.2` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/volta-sh.md
 *
 * @install `sh <(curl https://pkgx.sh) volta`
 * @name `volta`
 * @dependencies `linuxcurl.se/ca-certs`, `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.volta
 * // Or access via domain
 * const samePkg = pantry.voltash
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "volta"
 * console.log(pkg.description) // "JavaScript toolchain manager for reproducible e..."
 * console.log(pkg.programs)    // ["volta"]
 * console.log(pkg.versions[0]) // "2.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/volta-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const voltaPackage = {
  /**
   * The display name of this package.
   */
  name: 'volta' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'volta.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'JavaScript toolchain manager for reproducible environments' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/volta.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) volta' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'volta',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxcurl.se/ca-certs',
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'volta.sh' as const,
}

export type VoltaPackage = typeof voltaPackage
