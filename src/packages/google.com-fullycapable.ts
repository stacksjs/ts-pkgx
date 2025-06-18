/**
 * **fullycapable** - pkgx package
 *
 * @domain `google.com/fullycapable`
 * @programs `capsh`, `getcap`, `getpcaps`, `setcap`
 * @version `2.66.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/google-com/fullycapable.md
 *
 * @install `sh <(curl https://pkgx.sh) +google.com/fullycapable -- $SHELL -i`
 * @aliases `fullycapable`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.fullycapable
 * // Or access via domain
 * const samePkg = pantry.googlecomfullycapable
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "google.com/fullycapable"
 * console.log(pkg.programs)    // ["capsh", "getcap", ...]
 * console.log(pkg.versions[0]) // "2.66.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/fullycapable.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fullycapablePackage = {
  /**
   * The display name of this package.
   */
  name: 'google.com/fullycapable' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/fullycapable' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/fullycapable/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +google.com/fullycapable -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'capsh',
    'getcap',
    'getpcaps',
    'setcap',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.66.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'fullycapable',
  ] as const,
  fullPath: 'google.com/fullycapable' as const,
}

export type FullycapablePackage = typeof fullycapablePackage
