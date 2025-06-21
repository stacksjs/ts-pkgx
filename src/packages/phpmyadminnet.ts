/**
 * **phpmyadmin.net** - Package from pantry: phpmyadmin.net
 *
 * @domain `phpmyadmin.net`
 *
 * @install `launchpad install phpmyadmin.net`
 * @dependencies `php.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.phpmyadminnet
 * console.log(pkg.name)        // "phpmyadmin.net"
 * console.log(pkg.description) // "Package from pantry: phpmyadmin.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/phpmyadmin-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const phpmyadminnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'phpmyadmin.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'phpmyadmin.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: phpmyadmin.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install phpmyadmin.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'php.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/phpmyadmin.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PhpmyadminnetPackage = typeof phpmyadminnetPackage
