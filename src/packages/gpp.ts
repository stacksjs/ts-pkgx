/**
 * **gpp** - General-purpose preprocessor with customizable syntax
 *
 * @domain `logological.org/gpp`
 * @programs `gpp`
 * @version `2.28.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/logological-org/gpp.md
 *
 * @install `sh <(curl https://pkgx.sh) gpp`
 * @name `gpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gpp
 * // Or access via domain
 * const samePkg = pantry.logologicalorggpp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gpp"
 * console.log(pkg.description) // "General-purpose preprocessor with customizable ..."
 * console.log(pkg.programs)    // ["gpp"]
 * console.log(pkg.versions[0]) // "2.28.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/logological-org/gpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gppPackage = {
  /**
   * The display name of this package.
   */
  name: 'gpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'logological.org/gpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'General-purpose preprocessor with customizable syntax' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/logological.org/gpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gpp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gpp',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.28.0',
    '2.27.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'logological.org/gpp' as const,
}

export type GppPackage = typeof gppPackage
