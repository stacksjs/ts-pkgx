/**
 * **pkgm** - Install `pkgx` packages to `/usr/local`
 *
 * @domain `pkgx.sh/pkgm`
 * @programs `pkgm`
 * @version `0.11.1` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pkgm`
 * @name `pkgm`
 * @dependencies `pkgx.sh^2`, `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pkgm
 * // Or access via domain
 * const samePkg = pantry.pkgxshpkgm
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pkgm"
 * console.log(pkg.description) // "Install `pkgx` packages to `/usr/local`"
 * console.log(pkg.programs)    // ["pkgm"]
 * console.log(pkg.versions[0]) // "0.11.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/pkgm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgmPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkgm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh/pkgm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Install `pkgx` packages to `/usr/local`' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/pkgm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pkgm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pkgm',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^2',
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.1',
    '0.11.0',
    '0.10.1',
    '0.10.0',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.0',
    '0.7.2',
    '0.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type PkgmPackage = typeof pkgmPackage
