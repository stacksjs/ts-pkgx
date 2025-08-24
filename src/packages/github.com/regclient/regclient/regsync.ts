/**
 * **regsync** - Docker and OCI Registry Client in Go and tooling using those libraries.
 *
 * @domain `github.com/regclient/regclient/regsync`
 * @programs `regsync`
 * @version `0.9.1` (17 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install regsync`
 * @name `regsync`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.regsync
 * // Or access via domain
 * const samePkg = pantry.githubcomregclientregclientregsync
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "regsync"
 * console.log(pkg.description) // "Docker and OCI Registry Client in Go and toolin..."
 * console.log(pkg.programs)    // ["regsync"]
 * console.log(pkg.versions[0]) // "0.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/regclient/regclient/regsync.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const regsyncPackage = {
  /**
   * The display name of this package.
   */
  name: 'regsync' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/regclient/regclient/regsync' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Docker and OCI Registry Client in Go and tooling using those libraries.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/regclient/regclient/regsync/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/regclient/regclient' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install regsync' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'regsync',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.1',
    '0.9.0',
    '0.8.3',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.1',
    '0.6.0',
    '0.5.7',
    '0.5.6',
    '0.5.5',
    '0.5.4',
    '0.5.3',
    '0.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) regsync -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install regsync' as const,
}

export type RegsyncPackage = typeof regsyncPackage
