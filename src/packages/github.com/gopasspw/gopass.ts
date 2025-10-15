/**
 * **gopass** - The slightly more awesome standard unix password manager for teams
 *
 * @domain `github.com/gopasspw/gopass`
 * @programs `gopass`
 * @version `1.15.18` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/gopasspw/gopass`
 * @homepage https://www.gopass.pw/
 * @dependencies `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgopasspwgopass
 * console.log(pkg.name)        // "gopass"
 * console.log(pkg.description) // "The slightly more awesome standard unix passwor..."
 * console.log(pkg.programs)    // ["gopass"]
 * console.log(pkg.versions[0]) // "1.15.18" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/gopasspw/gopass.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgopasspwgopassPackage = {
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
  homepageUrl: 'https://www.gopass.pw/' as const,
  githubUrl: 'https://github.com/gopasspw/gopass' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/gopasspw/gopass' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/gopasspw/gopass -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/gopasspw/gopass' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gopass',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.15.18',
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
  aliases: [] as const,
}

export type GithubcomgopasspwgopassPackage = typeof githubcomgopasspwgopassPackage
