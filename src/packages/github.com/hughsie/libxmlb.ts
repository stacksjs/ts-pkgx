/**
 * **xb-tool** - A library to help create and query binary XML blobs
 *
 * @domain `github.com/hughsie/libxmlb`
 * @programs `xb-tool`
 * @version `0.3.23` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xb-tool`
 * @name `xb-tool`
 * @dependencies `gnome.org/glib@2`, `tukaani.org/xz@5`, `facebook.com/zstd@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xbtool
 * // Or access via domain
 * const samePkg = pantry.githubcomhughsielibxmlb
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xb-tool"
 * console.log(pkg.description) // "A library to help create and query binary XML b..."
 * console.log(pkg.programs)    // ["xb-tool"]
 * console.log(pkg.versions[0]) // "0.3.23" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/hughsie/libxmlb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xbtoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'xb-tool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/hughsie/libxmlb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A library to help create and query binary XML blobs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hughsie/libxmlb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xb-tool' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xb-tool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib@2',
    'tukaani.org/xz@5',
    'facebook.com/zstd@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.23',
    '0.3.22',
    '0.3.21',
    '0.3.20',
    '0.3.19',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) xb-tool -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install xb-tool' as const,
}

export type XbtoolPackage = typeof xbtoolPackage
