/**
 * **dexios** - A secure file encryption utility, written in Rust.
 *
 * @domain `brxken128.github.io/dexios`
 * @programs `dexios`
 * @version `8.8.1` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/brxken128-github-io/dexios.md
 *
 * @install `sh <(curl https://pkgx.sh) dexios`
 * @name `dexios`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dexios
 * // Or access via domain
 * const samePkg = pantry.brxken128githubiodexios
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dexios"
 * console.log(pkg.description) // "A secure file encryption utility, written in Rust."
 * console.log(pkg.programs)    // ["dexios"]
 * console.log(pkg.versions[0]) // "8.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/brxken128-github-io/dexios.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dexiosPackage = {
  /**
   * The display name of this package.
   */
  name: 'dexios' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'brxken128.github.io/dexios' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A secure file encryption utility, written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/brxken128.github.io/dexios/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) dexios' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dexios',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '8.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'brxken128.github.io/dexios' as const,
}

export type DexiosPackage = typeof dexiosPackage
