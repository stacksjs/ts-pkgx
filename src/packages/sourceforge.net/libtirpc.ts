/**
 * **sf.net/libtirpc** - pkgx package
 *
 * @domain `sourceforge.net/libtirpc`
 * @version `1.3.6` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +sourceforge.net/libtirpc -- $SHELL -i`
 * @aliases `sf.net/libtirpc`
 * @dependencies `kerberos.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.sfnetlibtirpc
 * // Or access via domain
 * const samePkg = pantry.sourceforgenetlibtirpc
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libtirpc"
 * console.log(pkg.versions[0]) // "1.3.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/libtirpc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sfnetlibtirpcPackage = {
  /**
   * The display name of this package.
   */
  name: 'libtirpc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/libtirpc' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/libtirpc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +sourceforge.net/libtirpc -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'kerberos.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.6',
    '1.3.5',
    '1.3.4',
    '1.3.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'sf.net/libtirpc',
  ] as const,
}

export type SfnetlibtirpcPackage = typeof sfnetlibtirpcPackage
