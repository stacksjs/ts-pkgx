/**
 * **supabase** - Supabase CLI. Manage postgres migrations, run Supabase locally, deploy edge functions. Postgres backups. Generating types from your database schema.
 *
 * @domain `supabase.com/cli`
 * @programs `supabase`
 * @version `2.33.9` (185 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install supabase`
 * @name `supabase`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.supabase
 * // Or access via domain
 * const samePkg = pantry.supabasecomcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "supabase"
 * console.log(pkg.description) // "Supabase CLI. Manage postgres migrations, run S..."
 * console.log(pkg.programs)    // ["supabase"]
 * console.log(pkg.versions[0]) // "2.33.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/supabase-com/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const supabasePackage = {
  /**
   * The display name of this package.
   */
  name: 'supabase' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'supabase.com/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Supabase CLI. Manage postgres migrations, run Supabase locally, deploy edge functions. Postgres backups. Generating types from your database schema.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/supabase.com/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install supabase' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'supabase',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.33.9',
    '2.33.7',
    '2.33.5',
    '2.33.4',
    '2.33.3',
    '2.31.8',
    '2.31.7',
    '2.31.4',
    '2.30.4',
    '2.26.9',
    '2.24.3',
    '2.23.4',
    '2.22.12',
    '2.22.6',
    '2.22.4',
    '2.20.12',
    '2.20.5',
    '2.20.3',
    '2.19.7',
    '2.19.6',
    '2.19.5',
    '2.15.8',
    '2.12.1',
    '2.12.0',
    '2.9.6',
    '2.6.8',
    '2.2.1',
    '2.1.1',
    '2.0.0',
    '1.226.3',
    '1.223.10',
    '1.223.7',
    '1.219.2',
    '1.219.0',
    '1.215.0',
    '1.207.9',
    '1.207.8',
    '1.204.3',
    '1.203.0',
    '1.200.3',
    '1.192.5',
    '1.191.3',
    '1.190.0',
    '1.188.4',
    '1.187.10',
    '1.187.8',
    '1.187.3',
    '1.183.5',
    '1.178.2',
    '1.176.10',
    '1.176.9',
    '1.176.4',
    '1.176.2',
    '1.172.2',
    '1.169.8',
    '1.169.6',
    '1.167.4',
    '1.165.0',
    '1.164.1',
    '1.163.6',
    '1.163.2',
    '1.162.4',
    '1.161.0',
    '1.159.1',
    '1.157.2',
    '1.157.1',
    '1.153.4',
    '1.153.1',
    '1.151.1',
    '1.150.0',
    '1.149.4',
    '1.148.6',
    '1.145.4',
    '1.145.2',
    '1.142.2',
    '1.142.1',
    '1.138.1',
    '1.138.0',
    '1.137.3',
    '1.137.2',
    '1.137.1',
    '1.137.0',
    '1.136.3',
    '1.136.2',
    '1.136.1',
    '1.136.0',
    '1.135.0',
    '1.134.8',
    '1.134.6',
    '1.134.5',
    '1.134.4',
    '1.134.3',
    '1.134.2',
    '1.134.1',
    '1.134.0',
    '1.133.3',
    '1.133.2',
    '1.133.1',
    '1.133.0',
    '1.132.1',
    '1.132.0',
    '1.131.5',
    '1.131.4',
    '1.131.3',
    '1.131.2',
    '1.131.1',
    '1.131.0',
    '1.130.0',
    '1.129.3',
    '1.129.2',
    '1.129.1',
    '1.129.0',
    '1.128.1',
    '1.128.0',
    '1.127.4',
    '1.127.3',
    '1.127.2',
    '1.127.1',
    '1.127.0',
    '1.126.2',
    '1.126.1',
    '1.126.0',
    '1.125.0',
    '1.124.2',
    '1.124.1',
    '1.124.0',
    '1.123.6',
    '1.123.5',
    '1.123.4',
    '1.123.3',
    '1.123.2',
    '1.123.1',
    '1.123.0',
    '1.122.0',
    '1.121.1',
    '1.121.0',
    '1.120.0',
    '1.119.1',
    '1.119.0',
    '1.118.2',
    '1.118.1',
    '1.118.0',
    '1.117.1',
    '1.117.0',
    '1.116.1',
    '1.116.0',
    '1.115.5',
    '1.115.4',
    '1.115.3',
    '1.115.2',
    '1.115.1',
    '1.115.0',
    '1.114.1',
    '1.114.0',
    '1.113.3',
    '1.113.2',
    '1.113.1',
    '1.113.0',
    '1.112.2',
    '1.112.1',
    '1.112.0',
    '1.111.4',
    '1.111.3',
    '1.111.2',
    '1.111.1',
    '1.111.0',
    '1.110.3',
    '1.110.2',
    '1.110.1',
    '1.110.0',
    '1.109.1',
    '1.109.0',
    '1.108.4',
    '1.108.3',
    '1.108.2',
    '1.108.1',
    '1.108.0',
    '1.107.1',
    '1.107.0',
    '1.106.1',
    '1.106.0',
    '1.105.0',
    '1.104.2',
    '1.104.1',
    '1.104.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) supabase -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install supabase' as const,
}

export type SupabasePackage = typeof supabasePackage
