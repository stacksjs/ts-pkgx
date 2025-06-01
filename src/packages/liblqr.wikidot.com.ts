/**
 * **liblqr.wikidot.com** - Liquid Rescale library
 *
 * @domain `liblqr.wikidot.com`
 * @version `0.4.3` (2 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/liblqr-wikidot-com.md
 *
 * @install `sh <(curl https://pkgx.sh) +liblqr.wikidot.com -- $SHELL -i`
 * @dependencies `gnome.org/glib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.liblqrwikidotcom
 * console.log(pkg.name)        // "liblqr.wikidot.com"
 * console.log(pkg.description) // "Liquid Rescale library"
 * console.log(pkg.versions[0]) // "0.4.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/liblqr-wikidot-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liblqrwikidotcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'liblqr.wikidot.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'liblqr.wikidot.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Liquid Rescale library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/liblqr.wikidot.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +liblqr.wikidot.com -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.3',
    '0.4.2',
  ] as const,
  aliases: [] as const,
  fullPath: 'liblqr.wikidot.com' as const,
}

export type LiblqrwikidotcomPackage = typeof liblqrwikidotcomPackage
