/**
 * **shout** - Data and connectivity library for the icecast server
 *
 * @domain `xiph.org/libshout`
 * @programs `shout`
 * @version `2.4.6` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install shout`
 * @name `shout`
 * @dependencies `xiph.org/ogg`, `xiph.org/vorbis`, `openssl.org~1`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.shout
 * // Or access via domain
 * const samePkg = pantry.xiphorglibshout
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "shout"
 * console.log(pkg.description) // "Data and connectivity library for the icecast s..."
 * console.log(pkg.programs)    // ["shout"]
 * console.log(pkg.versions[0]) // "2.4.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xiph-org/libshout.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const shoutPackage = {
  /**
   * The display name of this package.
   */
  name: 'shout' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xiph.org/libshout' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Data and connectivity library for the icecast server' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xiph.org/libshout/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install shout' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'shout',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/ogg',
    'xiph.org/vorbis',
    'openssl.org~1',
    'speex.org',
    'theora.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.4.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) shout -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install shout' as const,
}

export type ShoutPackage = typeof shoutPackage
