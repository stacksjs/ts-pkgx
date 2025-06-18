/**
 * **acl** - pkgx package
 *
 * @domain `savannah.nongnu.org/acl`
 * @programs `chacl`, `getfacl`, `setfacl`
 * @version `2.3.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +savannah.nongnu.org/acl -- $SHELL -i`
 * @name `acl`
 * @dependencies `gnu.org/gcc`, `gnu.org/libtool`, `savannah.nongnu.org/attr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.acl
 * // Or access via domain
 * const samePkg = pantry.savannahnongnuorgacl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "acl"
 * console.log(pkg.programs)    // ["chacl", "getfacl", ...]
 * console.log(pkg.versions[0]) // "2.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/savannah-nongnu-org/acl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aclPackage = {
  /**
   * The display name of this package.
   */
  name: 'acl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'savannah.nongnu.org/acl' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/savannah.nongnu.org/acl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +savannah.nongnu.org/acl -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'chacl',
    'getfacl',
    'setfacl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc',
    'gnu.org/libtool',
    'savannah.nongnu.org/attr',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type AclPackage = typeof aclPackage
