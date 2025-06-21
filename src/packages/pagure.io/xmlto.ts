/**
 * **xmlto** - Package from pantry: pagure.io/xmlto
 *
 * @domain `pagure.io/xmlto`
 *
 * @install `launchpad install pagure.io/xmlto`
 * @dependencies `docbook.org`, `github.com/util-linux/util-linux`, `darwin:gnome.org/libxslt` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pagureioxmlto
 * console.log(pkg.name)        // "xmlto"
 * console.log(pkg.description) // "Package from pantry: pagure.io/xmlto"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pagure-io/xmlto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pagureioxmltoPackage = {
  /**
   * The display name of this package.
   */
  name: 'xmlto' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pagure.io/xmlto' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pagure.io/xmlto' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pagure.io/xmlto' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pagure.io/xmlto/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PagureioxmltoPackage = typeof pagureioxmltoPackage
