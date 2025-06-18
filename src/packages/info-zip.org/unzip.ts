/**
 * **unzip** - Extraction utility for .zip compressed archives
 *
 * @domain `info-zip.org/unzip`
 * @programs `funzip`, `unzip`, `unzipsfx`, `zipgrep`, `zipinfo`
 * @version `6.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +info-zip.org/unzip -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.infoziporgunzip
 * console.log(pkg.name)        // "unzip"
 * console.log(pkg.description) // "Extraction utility for .zip compressed archives"
 * console.log(pkg.programs)    // ["funzip", "unzip", ...]
 * console.log(pkg.versions[0]) // "6.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/info-zip-org/unzip.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const infoziporgunzipPackage = {
  /**
   * The display name of this package.
   */
  name: 'unzip' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'info-zip.org/unzip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Extraction utility for .zip compressed archives' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/info-zip.org/unzip/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +info-zip.org/unzip -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'funzip',
    'unzip',
    'unzipsfx',
    'zipgrep',
    'zipinfo',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.0.0',
  ] as const,
  aliases: [] as const,
}

export type InfoziporgunzipPackage = typeof infoziporgunzipPackage
