/**
 * **bzip2** - Clone of https://gitlab.com/federicomenaquintero/bzip2
 *
 * @domain `sourceware.org/bzip2`
 * @programs `bunzip2`, `bzcat`, `bzcmp`, `bzdiff`, `bzgrep`, ... (+6 more)
 * @version `1.0.8` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/sourceware-org/bzip2.md
 *
 * @install `sh <(curl https://pkgx.sh) +sourceware.org/bzip2 -- $SHELL -i`
 * @aliases `bzip2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.bzip2
 * // Or access via domain
 * const samePkg = pantry.sourcewareorgbzip2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sourceware.org/bzip2"
 * console.log(pkg.description) // "Clone of https://gitlab.com/federicomenaquinter..."
 * console.log(pkg.programs)    // ["bunzip2", "bzcat", ...]
 * console.log(pkg.versions[0]) // "1.0.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceware-org/bzip2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bzip2Package = {
  /**
   * The display name of this package.
   */
  name: 'sourceware.org/bzip2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceware.org/bzip2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Clone of https://gitlab.com/federicomenaquintero/bzip2' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/bzip2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +sourceware.org/bzip2 -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bunzip2',
    'bzcat',
    'bzcmp',
    'bzdiff',
    'bzgrep',
    'bzegrep',
    'bzfgrep',
    'bzip2',
    'bzip2recover',
    'bzmore',
    'bzless',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'bzip2',
  ] as const,
  fullPath: 'sourceware.org/bzip2' as const,
}

export type Bzip2Package = typeof bzip2Package
