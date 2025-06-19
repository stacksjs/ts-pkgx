/**
 * **zip** - Compression and file packaging/archive utility
 *
 * @domain `info-zip.org/zip`
 * @programs `zip`, `zipcloak`, `zipnote`, `zipsplit`
 * @version `3.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +info-zip.org/zip -- $SHELL -i`
 * @name `zip`
 * @dependencies `sourceware.org/bzip2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zip
 * // Or access via domain
 * const samePkg = pantry.infoziporgzip
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zip"
 * console.log(pkg.description) // "Compression and file packaging/archive utility"
 * console.log(pkg.programs)    // ["zip", "zipcloak", ...]
 * console.log(pkg.versions[0]) // "3.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/info-zip-org/zip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zipPackage = {
  /**
   * The display name of this package.
   */
  name: 'zip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'info-zip.org/zip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Compression and file packaging/archive utility' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/info-zip.org/zip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +info-zip.org/zip -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zip',
    'zipcloak',
    'zipnote',
    'zipsplit',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/bzip2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ZipPackage = typeof zipPackage
