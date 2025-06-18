/**
 * **ddh** - A fast duplicate file finder
 *
 * @domain `crates.io/ddh`
 * @programs `ddh`
 * @version `0.13.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ddh.md
 *
 * @install `sh <(curl https://pkgx.sh) ddh`
 * @name `ddh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ddh
 * // Or access via domain
 * const samePkg = pantry.cratesioddh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ddh"
 * console.log(pkg.description) // "A fast duplicate file finder"
 * console.log(pkg.programs)    // ["ddh"]
 * console.log(pkg.versions[0]) // "0.13.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ddh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ddhPackage = {
  /**
   * The display name of this package.
   */
  name: 'ddh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ddh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast duplicate file finder' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ddh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) ddh' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ddh',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/ddh' as const,
}

export type DdhPackage = typeof ddhPackage
