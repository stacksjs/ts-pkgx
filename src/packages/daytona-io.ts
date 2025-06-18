/**
 * **daytona** - The Open Source Dev Environment Manager.
 *
 * @domain `daytona.io`
 * @programs `daytona`
 * @version `0.100.0` (76 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) daytona`
 * @name `daytona`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.daytona
 * // Or access via domain
 * const samePkg = pantry.daytonaio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "daytona"
 * console.log(pkg.description) // "The Open Source Dev Environment Manager."
 * console.log(pkg.programs)    // ["daytona"]
 * console.log(pkg.versions[0]) // "0.100.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/daytona-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daytonaPackage = {
  /**
   * The display name of this package.
   */
  name: 'daytona' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'daytona.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Open Source Dev Environment Manager.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/daytona.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) daytona' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'daytona',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.100.0',
    '0.53.0',
    '0.52.1',
    '0.52.0',
    '0.51.0',
    '0.50.0',
    '0.49.0',
    '0.48.0',
    '0.47.0',
    '0.46.1',
    '0.46.0',
    '0.45.0',
    '0.44.1',
    '0.44.0',
    '0.43.0',
    '0.42.1',
    '0.42.0',
    '0.41.0',
    '0.40.0',
    '0.39.0',
    '0.38.0',
    '0.37.0',
    '0.36.0',
    '0.35.1',
    '0.35.0',
    '0.34.0',
    '0.33.0',
    '0.32.0',
    '0.31.0',
    '0.30.1',
    '0.30.0',
    '0.29.1',
    '0.29.0',
    '0.28.1',
    '0.28.0',
    '0.27.0',
    '0.26.1',
    '0.26.0',
    '0.25.2',
    '0.25.1',
    '0.25.0',
    '0.24.0',
    '0.23.1',
    '0.23.0',
    '0.22.1',
    '0.22.0',
    '0.21.3',
    '0.21.2',
    '0.21.1',
    '0.21.0',
    '0.20.0',
    '0.19.1',
    '0.19.0',
    '0.18.0',
    '0.17.0',
    '0.16.0',
    '0.15.0',
    '0.14.0',
    '0.13.0',
    '0.12.1',
    '0.12.0',
    '0.11.0',
    '0.10.0',
    '0.9.0',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.1',
    '0.7.0',
    '0.6.0',
    '0.5.0',
    '0.4.1',
    '0.4.0',
    '0.3.1',
    '0.3.0',
    '0.2.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'daytona' as const,
}

export type DaytonaPackage = typeof daytonaPackage
