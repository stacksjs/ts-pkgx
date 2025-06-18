/**
 * **atlas** - Manage your database schema as code
 *
 * @domain `atlasgo.io`
 * @programs `atlas`
 * @version `0.35.0` (22 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/atlasgo-io.md
 *
 * @install `sh <(curl https://pkgx.sh) atlas`
 * @name `atlas`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.atlas
 * // Or access via domain
 * const samePkg = pantry.atlasgoio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "atlas"
 * console.log(pkg.description) // "Manage your database schema as code"
 * console.log(pkg.programs)    // ["atlas"]
 * console.log(pkg.versions[0]) // "0.35.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/atlasgo-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const atlasPackage = {
  /**
   * The display name of this package.
   */
  name: 'atlas' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'atlasgo.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Manage your database schema as code' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/atlasgo.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) atlas' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'atlas',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.35.0',
    '0.34.0',
    '0.33.0',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.0',
    '0.28.0',
    '0.27.0',
    '0.26.0',
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.0',
    '0.18.0',
    '0.17.0',
    '0.16.0',
    '0.15.0',
    '0.14.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'atlasgo.io' as const,
}

export type AtlasPackage = typeof atlasPackage
