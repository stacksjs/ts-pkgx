/**
 * **volta** - JavaScript toolchain manager for reproducible environments
 *
 * @domain `volta.sh`
 * @programs `volta`
 * @version `2.0.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install volta`
 * @aliases `volta`
 * @dependencies `linux:curl.se/ca-certs` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.volta
 * // Or access via domain
 * const samePkg = pantry.voltash
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "volta.sh"
 * console.log(pkg.description) // "JavaScript toolchain manager for reproducible e..."
 * console.log(pkg.programs)    // ["volta"]
 * console.log(pkg.versions[0]) // "2.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/volta-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const voltaPackage = {
  /**
   * The display name of this package.
   */
  name: 'volta.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'volta.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'JavaScript toolchain manager for reproducible environments' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/volta.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install volta' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'volta',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.2',
    '2.0.1',
    '2.0.0',
    '1.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'volta',
  ] as const,
}

export type VoltaPackage = typeof voltaPackage
