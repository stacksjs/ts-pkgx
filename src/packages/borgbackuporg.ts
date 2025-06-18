/**
 * **borg** - Deduplicating archiver with compression and authenticated encryption.
 *
 * @domain `borgbackup.org`
 * @programs `borg`, `borgfs`
 * @version `1.4.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +borgbackup.org -- $SHELL -i`
 * @aliases `borg`
 * @dependencies `pkgx.sh^1`, `github.com/Cyan4973/xxHash^0.8`, `python.org^3.10`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.borg
 * // Or access via domain
 * const samePkg = pantry.borgbackuporg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "borgbackup.org"
 * console.log(pkg.description) // "Deduplicating archiver with compression and aut..."
 * console.log(pkg.programs)    // ["borg", "borgfs"]
 * console.log(pkg.versions[0]) // "1.4.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/borgbackup-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const borgPackage = {
  /**
   * The display name of this package.
   */
  name: 'borgbackup.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'borgbackup.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Deduplicating archiver with compression and authenticated encryption.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/borgbackup.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +borgbackup.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'borg',
    'borgfs',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'github.com/Cyan4973/xxHash^0.8',
    'python.org^3.10',
    'openssl.org^1.1',
    'facebook.com/zstd',
    'lz4.org',
    'savannah.nongnu.org/acl^2.3.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'borg',
  ] as const,
}

export type BorgPackage = typeof borgPackage
