/**
 * **pgen** - Command-line passphrase generator
 *
 * @domain `crates.io/pgen`
 * @programs `pgen`
 * @version `1.3.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) pgen`
 * @name `pgen`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pgen
 * // Or access via domain
 * const samePkg = pantry.cratesiopgen
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pgen"
 * console.log(pkg.description) // "Command-line passphrase generator"
 * console.log(pkg.programs)    // ["pgen"]
 * console.log(pkg.versions[0]) // "1.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'pgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line passphrase generator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pgen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pgen' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pgen',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.0',
    '1.2.0',
    '1.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/pgen' as const,
}

export type PgenPackage = typeof pgenPackage
