/**
 * **rye** - Experimental Package Management Solution for Python
 *
 * @domain `rye.astral.sh`
 * @programs `rye`
 * @version `0.44.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) rye`
 * @name `rye`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rye
 * // Or access via domain
 * const samePkg = pantry.ryeastralsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rye"
 * console.log(pkg.description) // "Experimental Package Management Solution for Py..."
 * console.log(pkg.programs)    // ["rye"]
 * console.log(pkg.versions[0]) // "0.44.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rye-astral-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ryePackage = {
  /**
   * The display name of this package.
   */
  name: 'rye' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rye.astral.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Experimental Package Management Solution for Python' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rye.astral.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) rye' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rye',
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
    '0.44.0',
    '0.43.0',
    '0.42.0',
    '0.41.0',
    '0.40.0',
    '0.39.0',
    '0.38.0',
    '0.37.0',
    '0.36.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'rye.astral.sh' as const,
}

export type RyePackage = typeof ryePackage
