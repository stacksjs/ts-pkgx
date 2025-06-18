/**
 * **intltool** - String tool
 *
 * @domain `freedesktop.org/intltool`
 * @programs `intltool-extract`, `intltool-merge`, `intltool-prepare`, `intltool-update`, `intltoolize`, ... (+4 more)
 * @version `0.51.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/intltool.md
 *
 * @install `sh <(curl https://pkgx.sh) +freedesktop.org/intltool -- $SHELL -i`
 * @aliases `intltool`
 * @dependencies `perl.org~5`, `linuxlibexpat.github.io^2.6`, `libexpat.github.io^2.6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.intltool
 * // Or access via domain
 * const samePkg = pantry.freedesktoporgintltool
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "freedesktop.org/intltool"
 * console.log(pkg.description) // "String tool"
 * console.log(pkg.programs)    // ["intltool-extract", "intltool-merge", ...]
 * console.log(pkg.versions[0]) // "0.51.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/intltool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const intltoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'freedesktop.org/intltool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/intltool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'String tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/intltool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/intltool -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'intltool-extract',
    'intltool-merge',
    'intltool-prepare',
    'intltool-update',
    'intltoolize',
    'lwp-download',
    'lwp-dump',
    'lwp-mirror',
    'lwp-request',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org~5',
    'linuxlibexpat.github.io^2.6',
    'libexpat.github.io^2.6',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.51.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'intltool',
  ] as const,
  fullPath: 'freedesktop.org/intltool' as const,
}

export type IntltoolPackage = typeof intltoolPackage
