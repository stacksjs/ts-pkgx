/**
 * **postgrest** - Serves a fully RESTful API from any existing PostgreSQL database
 *
 * @domain `postgrest.org`
 * @programs `postgrest`
 * @version `<Error><Code>InternalError</Code><Message>We encountered an internal error. Please try again.</Message><RequestId>Y9QWZTVSWZGR6S22</RequestId><HostId>kRqGZ0DHOoSjCFVllzZWASv4+n8M03tJ/rUDqcLk75EuTInjYgD80bFNqv07x5J9EDacXaQ1zyk=</HostId></Error>` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install postgrest`
 * @name `postgrest`
 * @dependencies `postgresql.org/libpq@17`, `zlib.net~1.3`, `gnu.org/gcc/libstdcxx@14`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.postgrest
 * // Or access via domain
 * const samePkg = pantry.postgrestorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "postgrest"
 * console.log(pkg.description) // "Serves a fully RESTful API from any existing Po..."
 * console.log(pkg.programs)    // ["postgrest"]
 * console.log(pkg.versions[0]) // "<Error><Code>InternalError</Code><Message>We encountered an internal error. Please try again.</Message><RequestId>Y9QWZTVSWZGR6S22</RequestId><HostId>kRqGZ0DHOoSjCFVllzZWASv4+n8M03tJ/rUDqcLk75EuTInjYgD80bFNqv07x5J9EDacXaQ1zyk=</HostId></Error>" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/postgrest-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const postgrestPackage = {
  /**
   * The display name of this package.
   */
  name: 'postgrest' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'postgrest.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Serves a fully RESTful API from any existing PostgreSQL database' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/postgrest.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install postgrest' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'postgrest',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'postgresql.org/libpq@17',
    'zlib.net~1.3',
    'gnu.org/gcc/libstdcxx@14',
    'gnome.org/libxml2~2.13 # 2.14 changes library api version',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '<Error><Code>InternalError</Code><Message>We encountered an internal error. Please try again.</Message><RequestId>Y9QWZTVSWZGR6S22</RequestId><HostId>kRqGZ0DHOoSjCFVllzZWASv4+n8M03tJ/rUDqcLk75EuTInjYgD80bFNqv07x5J9EDacXaQ1zyk=</HostId></Error>',
    '<?xml version="1.0" encoding="UTF-8"?>',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) postgrest -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install postgrest' as const,
}

export type PostgrestPackage = typeof postgrestPackage
