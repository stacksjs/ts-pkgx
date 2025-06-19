/**
 * **attr** - Manipulate filesystem extended attributes
 *
 * @domain `savannah.nongnu.org/attr`
 * @programs `attr`, `getfattr`, `setfattr`
 * @version `2.5.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +savannah.nongnu.org/attr -- $SHELL -i`
 * @name `attr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.attr
 * // Or access via domain
 * const samePkg = pantry.savannahnongnuorgattr
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "attr"
 * console.log(pkg.description) // "Manipulate filesystem extended attributes"
 * console.log(pkg.programs)    // ["attr", "getfattr", ...]
 * console.log(pkg.versions[0]) // "2.5.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/savannah-nongnu-org/attr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const attrPackage = {
  /**
   * The display name of this package.
   */
  name: 'attr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'savannah.nongnu.org/attr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Manipulate filesystem extended attributes' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/savannah.nongnu.org/attr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +savannah.nongnu.org/attr -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'attr',
    'getfattr',
    'setfattr',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.2',
    '2.5.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type AttrPackage = typeof attrPackage
