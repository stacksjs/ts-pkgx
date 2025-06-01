/**
 * **wait4x** - Wait4X allows you to wait for a port or a service to enter the requested state.
 *
 * @domain `wait4x.dev`
 * @programs `wait4x`
 * @version `3.3.1` (7 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/wait4x-dev.md
 *
 * @install `sh <(curl https://pkgx.sh) wait4x`
 * @name `wait4x`
 * @companions `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.wait4x
 * // Or access via domain
 * const samePkg = pantry.wait4xdev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "wait4x"
 * console.log(pkg.description) // "Wait4X allows you to wait for a port or a servi..."
 * console.log(pkg.programs)    // ["wait4x"]
 * console.log(pkg.versions[0]) // "3.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wait4x-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wait4xPackage = {
  /**
   * The display name of this package.
   */
  name: 'wait4x' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wait4x.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Wait4X allows you to wait for a port or a service to enter the requested state.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wait4x.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) wait4x' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wait4x',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'curl.se/ca-certs',
  ] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.0',
    '3.0.0',
    '2.14.3',
    '2.14.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'wait4x.dev' as const,
}

export type Wait4xPackage = typeof wait4xPackage
