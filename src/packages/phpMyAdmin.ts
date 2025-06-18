/**
 * **phpMyAdmin** - pkgx package
 *
 * @domain `phpmyadmin.net`
 * @version `5.2.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +phpmyadmin.net -- $SHELL -i`
 * @name `phpMyAdmin`
 * @dependencies `php.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.phpMyAdmin
 * // Or access via domain
 * const samePkg = pantry.phpmyadminnet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "phpMyAdmin"
 * console.log(pkg.versions[0]) // "5.2.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/phpmyadmin-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const phpMyAdminPackage = {
  /**
   * The display name of this package.
   */
  name: 'phpMyAdmin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'phpmyadmin.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/phpmyadmin.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +phpmyadmin.net -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'php.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.2.2',
    '5.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'phpmyadmin.net' as const,
}

export type PhpMyAdminPackage = typeof phpMyAdminPackage
