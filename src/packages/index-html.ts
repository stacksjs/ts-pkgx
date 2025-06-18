/**
 * **index.html** - pkgx package
 *
 * @domain `index.html`
 *
 * @install `pkgx index.html`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.indexhtml
 * console.log(pkg.name)        // "index.html"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/index-html.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const indexhtmlPackage = {
  /**
   * The display name of this package.
   */
  name: 'index.html' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'index.html' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx index.html' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'index.html' as const,
}

export type IndexhtmlPackage = typeof indexhtmlPackage
