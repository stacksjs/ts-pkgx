/**
 * **gopass** - The slightly more awesome standard unix password manager for teams
 *
 * @domain `github.com/gopasspw/gopass`
 * @programs `gopass`
 * @version `1.15.17` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gopass`
 * @name `gopass`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gopass
 * // Or access via domain
 * const samePkg = pantry.githubcomgopasspwgopass
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gopass"
 * console.log(pkg.description) // "The slightly more awesome standard unix passwor..."
 * console.log(pkg.programs)    // ["gopass"]
 * console.log(pkg.versions[0]) // "1.15.17" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gopasspw/gopass.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gopassPackage = {
  /**
   * The display name of this package.
   */
  name: 'gopass' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/gopasspw/gopass' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The slightly more awesome standard unix password manager for teams' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/gopasspw/gopass/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gopass' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gopass',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.15.17',
    '1.15.16',
    '1.15.15',
    '1.15.14',
    '1.15.13',
    '1.15.12',
    '1.15.11',
    '1.15.10',
    '1.15.9',
    '1.15.8',
    '1.15.7',
    '1.15.6',
    '1.15.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) gopass -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gopass' as const,
}

export type GopassPackage = typeof gopassPackage
