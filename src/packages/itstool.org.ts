/**
 * **itstool** - Translate XML with PO files using W3C Internationalization Tag Set rules
 *
 * @domain `itstool.org`
 * @programs `itstool`
 * @version `2.0.7` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/itstool-org.md
 *
 * @install `sh <(curl https://pkgx.sh) itstool`
 * @name `itstool`
 * @dependencies `gnome.org/libxml2`, `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.itstool
 * // Or access via domain
 * const samePkg = pantry.itstoolorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "itstool"
 * console.log(pkg.description) // "Translate XML with PO files using W3C Internati..."
 * console.log(pkg.programs)    // ["itstool"]
 * console.log(pkg.versions[0]) // "2.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/itstool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const itstoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'itstool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'itstool.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Translate XML with PO files using W3C Internationalization Tag Set rules' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/itstool.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) itstool' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'itstool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2',
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'itstool.org' as const,
}

export type ItstoolPackage = typeof itstoolPackage
