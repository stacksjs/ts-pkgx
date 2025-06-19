/**
 * **libexif.github.io** - A library for parsing, editing, and saving EXIF data
 *
 * @domain `libexif.github.io`
 * @version `0.6.25` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +libexif.github.io -- $SHELL -i`
 * @dependencies `gnu.org/gettext`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libexifgithubio
 * console.log(pkg.name)        // "libexif.github.io"
 * console.log(pkg.description) // "A library for parsing, editing, and saving EXIF..."
 * console.log(pkg.versions[0]) // "0.6.25" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libexif-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libexifgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libexif.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libexif.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A library for parsing, editing, and saving EXIF data' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libexif.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +libexif.github.io -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.25',
    '0.6.24',
  ] as const,
  aliases: [] as const,
}

export type LibexifgithubioPackage = typeof libexifgithubioPackage
