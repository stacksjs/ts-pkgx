/**
 * **server** - Package from pantry: mariadb.com/server
 *
 * @domain `mariadb.com/server`
 *
 * @install `launchpad install mariadb.com/server`
 * @dependencies `sourceware.org/bzip2^1`, `github.com/besser82/libxcrypt^4`, `gnome.org/libxml2`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mariadbcomserver
 * console.log(pkg.name)        // "server"
 * console.log(pkg.description) // "Package from pantry: mariadb.com/server"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mariadb-com/server.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mariadbcomserverPackage = {
  /**
   * The display name of this package.
   */
  name: 'server' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mariadb.com/server' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mariadb.com/server' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mariadb.com/server' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mariadb.com/server -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mariadb.com/server' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/bzip2^1',
    'github.com/besser82/libxcrypt^4',
    'gnome.org/libxml2',
    'invisible-island.net/ncurses^6',
    'zlib.net^1',
    'openssl.org^1.1',
    'pcre.org/v2^10',
    'facebook.com/zstd^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mariadb.com/server/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MariadbcomserverPackage = typeof mariadbcomserverPackage
