/**
 * **changie** - Automated changelog tool for preparing releases with lots of customization options
 *
 * @domain `changie.dev`
 * @programs `changie`
 * @version `1.22.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) changie`
 * @name `changie`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.changie
 * // Or access via domain
 * const samePkg = pantry.changiedev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "changie"
 * console.log(pkg.description) // "Automated changelog tool for preparing releases..."
 * console.log(pkg.programs)    // ["changie"]
 * console.log(pkg.versions[0]) // "1.22.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/changie-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const changiePackage = {
  /**
   * The display name of this package.
   */
  name: 'changie' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'changie.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Automated changelog tool for preparing releases with lots of customization options' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/changie.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) changie' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'changie',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.22.0',
    '1.21.1',
    '1.21.0',
    '1.20.1',
    '1.20.0',
    '1.19.1',
    '1.19.0',
    '1.18.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'changie' as const,
}

export type ChangiePackage = typeof changiePackage
