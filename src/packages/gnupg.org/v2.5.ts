/**
 * **v2.5** - pkgx package
 *
 * @domain `gnupg.org/v2.5`
 * @version `2.5.7` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +gnupg.org/v2.5 -- $SHELL -i`
 * @aliases `v2.5`
 * @dependencies `zlib.net^1.1`, `sourceware.org/bzip2`, `gnupg.org/npth`, ... (+11 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.v25
 * // Or access via domain
 * const samePkg = pantry.gnupgorgv25
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnupg.org/v2.5"
 * console.log(pkg.versions[0]) // "2.5.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/v2-5.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const v25Package = {
  /**
   * The display name of this package.
   */
  name: 'gnupg.org/v2.5' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/v2.5' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/v2.5/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/v2.5 -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1.1',
    'sourceware.org/bzip2',
    'gnupg.org/npth',
    'gnupg.org/libgpg-error',
    'gnupg.org/libksba',
    'gnupg.org/libassuan@3',
    'gnupg.org/libgcrypt^1.11',
    'gnupg.org/pinentry',
    'gnutls.org^3',
    'openldap.org^2',
    'gnu.org/readline^8',
    'sqlite.org^3',
    'darwingnu.org/gettext^0.21',
    'gnu.org/gettext^0.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.7',
    '2.5.6',
    '2.5.5',
    '2.5.4',
    '2.5.3',
    '2.5.2',
    '2.5.1',
    '2.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'v2.5',
  ] as const,
  fullPath: 'gnupg.org/v2.5' as const,
}

export type V25Package = typeof v25Package
