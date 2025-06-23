/**
 * **aomenc** - Codec library for encoding and decoding AV1 video streams
 *
 * @domain `aomedia.googlesource.com/aom`
 * @programs `aomenc`, `aomdec`
 * @version `3.12.1` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install aomenc`
 * @name `aomenc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.aomenc
 * // Or access via domain
 * const samePkg = pantry.aomediagooglesourcecomaom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aomenc"
 * console.log(pkg.description) // "Codec library for encoding and decoding AV1 vid..."
 * console.log(pkg.programs)    // ["aomenc", "aomdec"]
 * console.log(pkg.versions[0]) // "3.12.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/aomedia-googlesource-com/aom.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aomencPackage = {
  /**
   * The display name of this package.
   */
  name: 'aomenc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'aomedia.googlesource.com/aom' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Codec library for encoding and decoding AV1 video streams' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/aomedia.googlesource.com/aom/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install aomenc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aomenc',
    'aomdec',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.12.1',
    '3.12.0',
    '3.11.0',
    '3.10.0',
    '3.9.1',
    '3.9.0',
    '3.8.3',
    '3.8.2',
    '3.8.1',
    '3.8.0',
    '3.7.2',
    '3.7.1',
    '3.7.0',
    '3.6.1',
    '3.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +aomedia.googlesource.com/aom -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install aomenc' as const,
}

export type AomencPackage = typeof aomencPackage
