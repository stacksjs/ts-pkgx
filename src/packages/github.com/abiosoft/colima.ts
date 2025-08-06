/**
 * **colima** - Container runtimes on macOS (and Linux) with minimal setup
 *
 * @domain `github.com/abiosoft/colima`
 * @programs `colima`
 * @version `0.8.4` (25 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install colima`
 * @name `colima`
 * @dependencies `lima-vm.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.colima
 * // Or access via domain
 * const samePkg = pantry.githubcomabiosoftcolima
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "colima"
 * console.log(pkg.description) // "Container runtimes on macOS (and Linux) with mi..."
 * console.log(pkg.programs)    // ["colima"]
 * console.log(pkg.versions[0]) // "0.8.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/abiosoft/colima.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const colimaPackage = {
  /**
   * The display name of this package.
   */
  name: 'colima' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/abiosoft/colima' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Container runtimes on macOS (and Linux) with minimal setup' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/abiosoft/colima/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install colima' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'colima',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lima-vm.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.4',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.6',
    '0.7.5',
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.10',
    '0.6.9',
    '0.6.8',
    '0.6.7',
    '0.6.6',
    '0.6.5',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.6',
    '0.5.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) colima -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install colima' as const,
}

export type ColimaPackage = typeof colimaPackage
