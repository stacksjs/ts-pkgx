/**
 * **sd** - Intuitive find & replace CLI (sed alternative)
 *
 * @domain `crates.io/sd`
 * @programs `sd`
 * @version `1.0.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sd.md
 *
 * @install `sh <(curl https://pkgx.sh) sd`
 * @name `sd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sd
 * // Or access via domain
 * const samePkg = pantry.cratesiosd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sd"
 * console.log(pkg.description) // "Intuitive find & replace CLI (sed alternative)"
 * console.log(pkg.programs)    // ["sd"]
 * console.log(pkg.versions[0]) // "1.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sdPackage = {
  /**
   * The display name of this package.
   */
  name: 'sd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Intuitive find & replace CLI (sed alternative)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/sd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sd' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sd',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.0',
    '0.7.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/sd' as const,
}

export type SdPackage = typeof sdPackage
