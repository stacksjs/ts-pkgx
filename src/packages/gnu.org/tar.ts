/**
 * **tar** - Multi-format archive and compression library
 *
 * @domain `gnu.org/tar`
 * @programs `tar`
 * @version `1.35.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tar`
 * @name `tar`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tar
 * // Or access via domain
 * const samePkg = pantry.gnuorgtar
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tar"
 * console.log(pkg.description) // "Multi-format archive and compression library"
 * console.log(pkg.programs)    // ["tar"]
 * console.log(pkg.versions[0]) // "1.35.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/tar.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tarPackage = {
  /**
   * The display name of this package.
   */
  name: 'tar' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/tar' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Multi-format archive and compression library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/tar/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tar' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tar',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.35.0',
    '1.34.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TarPackage = typeof tarPackage
