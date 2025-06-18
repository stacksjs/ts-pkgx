/**
 * **xz** - General-purpose data compression with high compression ratio
 *
 * @domain `tukaani.org/xz`
 * @programs `lzcat`, `lzcmp`, `lzdiff`, `lzegrep`, `lzfgrep`, ... (+18 more)
 * @version `5.8.1` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +tukaani.org/xz -- $SHELL -i`
 * @aliases `xz`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.xz
 * // Or access via domain
 * const samePkg = pantry.tukaaniorgxz
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tukaani.org/xz"
 * console.log(pkg.description) // "General-purpose data compression with high comp..."
 * console.log(pkg.programs)    // ["lzcat", "lzcmp", ...]
 * console.log(pkg.versions[0]) // "5.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tukaani-org/xz.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xzPackage = {
  /**
   * The display name of this package.
   */
  name: 'tukaani.org/xz' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tukaani.org/xz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'General-purpose data compression with high compression ratio' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tukaani.org/xz/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +tukaani.org/xz -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lzcat',
    'lzcmp',
    'lzdiff',
    'lzegrep',
    'lzfgrep',
    'lzgrep',
    'lzless',
    'lzma',
    'lzmadec',
    'lzmainfo',
    'lzmore',
    'unlzma',
    'unxz',
    'xz',
    'xzcat',
    'xzcmp',
    'xzdec',
    'xzdiff',
    'xzegrep',
    'xzfgrep',
    'xzgrep',
    'xzless',
    'xzmore',
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
    '5.6.4',
    '5.6.3',
    '5.6.2',
    '5.4.7',
    '5.4.6',
    '5.4.5',
    '5.4.4',
    '5.4.3',
    '5.4.2',
    '5.4.1',
    '5.4.0',
    '5.2.13',
    '5.2.12',
    '5.2.11',
    '5.2.10',
    '5.2.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'xz',
  ] as const,
  fullPath: 'tukaani.org/xz' as const,
}

export type XzPackage = typeof xzPackage
