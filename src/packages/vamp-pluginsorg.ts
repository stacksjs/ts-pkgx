/**
 * **vamp** - Audio processing plugin system sdk
 *
 * @domain `vamp-plugins.org`
 * @programs `vamp-simple-host`, `vamp-rdf-template-generator`
 * @version `2.10.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +vamp-plugins.org -- $SHELL -i`
 * @aliases `vamp`
 * @dependencies `xiph.org/flac^1.4`, `xiph.org/ogg^1.3`, `github.com/libsndfile/libsndfile^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.vamp
 * // Or access via domain
 * const samePkg = pantry.vamppluginsorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vamp-plugins.org"
 * console.log(pkg.description) // "Audio processing plugin system sdk"
 * console.log(pkg.programs)    // ["vamp-simple-host", "vamp-rdf-template-generator"]
 * console.log(pkg.versions[0]) // "2.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vamp-plugins-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vampPackage = {
  /**
   * The display name of this package.
   */
  name: 'vamp-plugins.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vamp-plugins.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Audio processing plugin system sdk' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vamp-plugins.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +vamp-plugins.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vamp-simple-host',
    'vamp-rdf-template-generator',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/flac^1.4',
    'xiph.org/ogg^1.3',
    'github.com/libsndfile/libsndfile^1.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.10.0',
    '2.9.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'vamp',
  ] as const,
}

export type VampPackage = typeof vampPackage
