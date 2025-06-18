/**
 * **vhs** - Your CLI home video recorder 📼
 *
 * @domain `charm.sh/vhs`
 * @programs `vhs`
 * @version `0.10.0` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) vhs`
 * @name `vhs`
 * @dependencies `ffmpeg.org>=5`, `tsl0922.github.io/ttyd^1.7.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vhs
 * // Or access via domain
 * const samePkg = pantry.charmshvhs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vhs"
 * console.log(pkg.description) // "Your CLI home video recorder 📼"
 * console.log(pkg.programs)    // ["vhs"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/vhs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vhsPackage = {
  /**
   * The display name of this package.
   */
  name: 'vhs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/vhs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Your CLI home video recorder 📼' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/vhs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) vhs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vhs',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ffmpeg.org>=5',
    'tsl0922.github.io/ttyd^1.7.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
    '0.9.0',
    '0.8.0',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.0',
    '0.5.0',
    '0.4.0',
    '0.3.0',
    '0.2.0',
    '0.1.1',
    '0.1.0',
    '0.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'charm.sh/vhs' as const,
}

export type VhsPackage = typeof vhsPackage
