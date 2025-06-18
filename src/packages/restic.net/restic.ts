/**
 * **restic** - Fast, efficient and secure backup program
 *
 * @domain `restic.net/restic`
 * @programs `restic`
 * @version `0.18.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install restic`
 * @name `restic`
 * @dependencies `go.dev^1.20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.restic
 * // Or access via domain
 * const samePkg = pantry.resticnetrestic
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "restic"
 * console.log(pkg.description) // "Fast, efficient and secure backup program"
 * console.log(pkg.programs)    // ["restic"]
 * console.log(pkg.versions[0]) // "0.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/restic-net/restic.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const resticPackage = {
  /**
   * The display name of this package.
   */
  name: 'restic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'restic.net/restic' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast, efficient and secure backup program' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/restic.net/restic/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install restic' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'restic',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.0',
    '0.17.3',
    '0.17.2',
    '0.17.1',
    '0.17.0',
    '0.16.5',
    '0.16.4',
    '0.16.3',
    '0.16.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ResticPackage = typeof resticPackage
