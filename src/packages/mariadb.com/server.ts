/**
 * **MariaDB** - MariaDB server is a community developed fork of MySQL server. Started by core members of the original MySQL team, MariaDB actively works with outside developers to deliver the most featureful, stable, and sanely licensed open SQL server in the industry.
 *
 * @domain `mariadb.com/server`
 * @programs `aria_chk`, `aria_dump_log`, `aria_ftdump`, `aria_pack`, `aria_read_log`, ... (+79 more)
 * @version `12.0.1` (26 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +mariadb.com/server -- $SHELL -i`
 * @aliases `MariaDB`
 * @dependencies `sourceware.org/bzip2^1`, `github.com/besser82/libxcrypt^4`, `gnome.org/libxml2`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.MariaDB
 * // Or access via domain
 * const samePkg = pantry.mariadbcomserver
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "server"
 * console.log(pkg.description) // "MariaDB server is a community developed fork of..."
 * console.log(pkg.programs)    // ["aria_chk", "aria_dump_log", ...]
 * console.log(pkg.versions[0]) // "12.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mariadb-com/server.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mariaDBPackage = {
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
  description: 'MariaDB server is a community developed fork of MySQL server. Started by core members of the original MySQL team, MariaDB actively works with outside developers to deliver the most featureful, stable, and sanely licensed open SQL server in the industry.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mariadb.com/server/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/MariaDB/server' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +mariadb.com/server -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aria_chk',
    'aria_dump_log',
    'aria_ftdump',
    'aria_pack',
    'aria_read_log',
    'aria_s3_copy',
    'innochecksum',
    'mariabackup',
    'mariadb',
    'mariadb-access',
    'mariadb-admin',
    'mariadb-backup',
    'mariadb-binlog',
    'mariadb-check',
    'mariadb-client-test',
    'mariadb-config',
    'mariadb-conv',
    'mariadb-convert-table-format',
    'mariadb-dump',
    'mariadb-dumpslow',
    'mariadb-find-rows',
    'mariadb-fix-extensions',
    'mariadb-hotcopy',
    'mariadb-import',
    'mariadb-plugin',
    'mariadb-secure-installation',
    'mariadb-setpermission',
    'mariadb-show',
    'mariadb-slap',
    'mariadb-test',
    'mariadb-tzinfo-to-sql',
    'mariadb-upgrade',
    'mariadb-waitpid',
    'mariadb_config',
    'mariadbd',
    'mariadbd-multi',
    'mariadbd-safe',
    'mariadbd-safe-helper',
    'mbstream',
    'msql2mysql',
    'my_print_defaults',
    'myisam_ftdump',
    'myisamchk',
    'myisamlog',
    'myisampack',
    'mysql',
    'mysql.server',
    'mysql_client_test',
    'mysql_config',
    'mysql_convert_table_format',
    'mysql_find_rows',
    'mysql_fix_extensions',
    'mysql_install_db',
    'mysql_plugin',
    'mysql_secure_installation',
    'mysql_setpermission',
    'mysql_tzinfo_to_sql',
    'mysql_upgrade',
    'mysql_waitpid',
    'mysqlaccess',
    'mysqladmin',
    'mysqlbinlog',
    'mysqlcheck',
    'mysqld',
    'mysqld_multi',
    'mysqld_safe',
    'mysqld_safe_helper',
    'mysqldump',
    'mysqldumpslow',
    'mysqlhotcopy',
    'mysqlimport',
    'mysqlshow',
    'mysqlslap',
    'mysqltest',
    'mytop',
    'perror',
    'replace',
    'resolve_stack_dump',
    'resolveip',
    'wsrep_sst_backup',
    'wsrep_sst_mariabackup',
    'wsrep_sst_mysqldump',
    'wsrep_sst_rsync',
    'wsrep_sst_rsync_wan',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '12.0.1',
    '11.8.2',
    '11.8.1',
    '11.8.0',
    '11.7.2',
    '11.7.1',
    '11.6.2',
    '11.6.1',
    '11.5.2',
    '11.5.1',
    '11.4.7',
    '11.4.6',
    '11.4.5',
    '11.4.2',
    '11.4.1',
    '11.3.2',
    '11.3.1',
    '11.2.2',
    '11.2.1',
    '10.11.13',
    '10.11.12',
    '10.11.11',
    '10.6.22',
    '10.6.21',
    '10.5.29',
    '10.5.28',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'MariaDB',
  ] as const,
}

export type MariaDBPackage = typeof mariaDBPackage
