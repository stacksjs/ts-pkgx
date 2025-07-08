/**
 * **socat** - SOcket CAT: netcat on steroids
 *
 * @domain `dest-unreach.org/socat`
 * @programs `socat`
 * @version `1.8.0.3` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install socat`
 * @name `socat`
 * @dependencies `openssl.org^1.1`, `gnu.org/readline^8.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.socat
 * // Or access via domain
 * const samePkg = pantry.destunreachorgsocat
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "socat"
 * console.log(pkg.description) // "SOcket CAT: netcat on steroids"
 * console.log(pkg.programs)    // ["socat"]
 * console.log(pkg.versions[0]) // "1.8.0.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dest-unreach-org/socat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const socatPackage = {
  /**
   * The display name of this package.
   */
  name: 'socat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dest-unreach.org/socat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'SOcket CAT: netcat on steroids' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dest-unreach.org/socat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install socat' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'socat',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'gnu.org/readline^8.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.0.3',
    '1.8.0.2',
    '1.8.0.1',
    '1.8.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) socat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install socat' as const,
}

export type SocatPackage = typeof socatPackage
