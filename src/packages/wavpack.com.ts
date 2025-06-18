/**
 * **wavpack.com** - WavPack encode/decode library, command-line programs, and several plugins
 *
 * @domain `wavpack.com`
 * @programs `wavpack`, `wvunpack`, `wvtag`, `wvgain`
 * @version `5.8.1` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/wavpack-com.md
 *
 * @install `sh <(curl https://pkgx.sh) +wavpack.com -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wavpackcom
 * console.log(pkg.name)        // "wavpack.com"
 * console.log(pkg.description) // "WavPack encode/decode library, command-line pro..."
 * console.log(pkg.programs)    // ["wavpack", "wvunpack", ...]
 * console.log(pkg.versions[0]) // "5.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wavpack-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wavpackcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'wavpack.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wavpack.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'WavPack encode/decode library, command-line programs, and several plugins' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wavpack.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +wavpack.com -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'wavpack',
    'wvunpack',
    'wvtag',
    'wvgain',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.8.1',
    '5.8.0',
    '5.7.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'wavpack.com' as const,
}

export type WavpackcomPackage = typeof wavpackcomPackage
