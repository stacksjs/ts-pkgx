/**
 * **stress-ng** - This is the stress-ng upstream project git repository.  stress-ng will stress test a computer system in various selectable ways. It was designed to exercise various physical subsystems of a computer as well as the various operating system kernel interfaces.
 *
 * @domain `github.com/ColinIanKing/stress-ng`
 * @programs `stress-ng`
 * @version `0.19.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) stress-ng`
 * @name `stress-ng`
 * @aliases `ColinIanKing/stress-ng`
 * @dependencies `github.com/besser82/libxcrypt`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.stressng
 * // Or access via domain
 * const samePkg = pantry.githubcomcoliniankingstressng
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "stress-ng"
 * console.log(pkg.description) // "This is the stress-ng upstream project git repo..."
 * console.log(pkg.programs)    // ["stress-ng"]
 * console.log(pkg.versions[0]) // "0.19.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ColinIanKing/stress-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stressngPackage = {
  /**
   * The display name of this package.
   */
  name: 'stress-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ColinIanKing/stress-ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'This is the stress-ng upstream project git repository.  stress-ng will stress test a computer system in various selectable ways. It was designed to exercise various physical subsystems of a computer as well as the various operating system kernel interfaces.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ColinIanKing/stress-ng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) stress-ng' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'stress-ng',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/besser82/libxcrypt',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.19.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ColinIanKing/stress-ng',
  ] as const,
  fullPath: 'github.com/ColinIanKing/stress-ng' as const,
}

export type StressngPackage = typeof stressngPackage
