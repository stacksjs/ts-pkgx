/**
 * **xml2-config** - Read-only mirror of https://gitlab.gnome.org/GNOME/libxml2
 *
 * @domain `gnome.org/libxml2`
 * @programs `xml2-config`, `xmlcatalog`, `xmllint`
 * @version `2.14.5` (36 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xml2-config`
 * @name `xml2-config`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xml2config
 * // Or access via domain
 * const samePkg = pantry.gnomeorglibxml2
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xml2-config"
 * console.log(pkg.description) // "Read-only mirror of https://gitlab.gnome.org/GN..."
 * console.log(pkg.programs)    // ["xml2-config", "xmlcatalog", ...]
 * console.log(pkg.versions[0]) // "2.14.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnome-org/libxml2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xml2configPackage = {
  /**
   * The display name of this package.
   */
  name: 'xml2-config' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnome.org/libxml2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Read-only mirror of https://gitlab.gnome.org/GNOME/libxml2' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/libxml2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xml2-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xml2-config',
    'xmlcatalog',
    'xmllint',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.14.5',
    '2.14.4',
    '2.14.3',
    '2.14.2',
    '2.14.1',
    '2.14.0',
    '2.13.8',
    '2.13.7',
    '2.13.6',
    '2.13.5',
    '2.13.4',
    '2.13.3',
    '2.13.2',
    '2.13.1',
    '2.13.0',
    '2.12.9',
    '2.12.8',
    '2.12.7',
    '2.12.6',
    '2.12.5',
    '2.12.4',
    '2.12.3',
    '2.12.2',
    '2.12.1',
    '2.12.0',
    '2.11.9',
    '2.11.8',
    '2.11.7',
    '2.11.6',
    '2.11.4',
    '2.11.3',
    '2.11.2',
    '2.11.1',
    '2.11.0',
    '2.10.4',
    '2.10.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnome.org/libxml2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install xml2-config' as const,
}

export type Xml2configPackage = typeof xml2configPackage
