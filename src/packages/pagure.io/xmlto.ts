/**
 * **xmlif** - Convert XML to another format (based on XSL or other tools)
 *
 * @domain `pagure.io/xmlto`
 * @programs `xmlif`, `xmlto`
 * @version `0.0.29` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xmlif`
 * @name `xmlif`
 * @dependencies `docbook.org`, `github.com/util-linux/util-linux`, `darwin:gnome.org/libxslt` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xmlif
 * // Or access via domain
 * const samePkg = pantry.pagureioxmlto
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xmlif"
 * console.log(pkg.description) // "Convert XML to another format (based on XSL or ..."
 * console.log(pkg.programs)    // ["xmlif", "xmlto"]
 * console.log(pkg.versions[0]) // "0.0.29" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pagure-io/xmlto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xmlifPackage = {
  /**
   * The display name of this package.
   */
  name: 'xmlif' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pagure.io/xmlto' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Convert XML to another format (based on XSL or other tools)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pagure.io/xmlto/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xmlif' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xmlif',
    'xmlto',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'docbook.org',
    'github.com/util-linux/util-linux',
    'darwin:gnome.org/libxslt',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.29',
    '0.0.28',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pagure.io/xmlto -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install xmlif' as const,
}

export type XmlifPackage = typeof xmlifPackage
