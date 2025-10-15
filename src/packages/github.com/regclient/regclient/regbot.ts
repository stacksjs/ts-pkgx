/**
 * **regbot** - Docker and OCI Registry Client in Go and tooling using those libraries.
 *
 * @domain `github.com/regclient/regclient/regbot`
 * @programs `regbot`
 * @version `0.9.2` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/regclient/regclient/regbot`
 * @dependencies `curl.se/ca-certs`
 * @buildDependencies `go.dev@^1.21` - required only when building from source
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomregclientregclientregbot
 * console.log(pkg.name)        // "regbot"
 * console.log(pkg.description) // "Docker and OCI Registry Client in Go and toolin..."
 * console.log(pkg.programs)    // ["regbot"]
 * console.log(pkg.versions[0]) // "0.9.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/regclient/regclient/regbot.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const regbotPackage = {
  /**
   * The display name of this package.
   */
  name: 'regbot' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/regclient/regclient/regbot' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Docker and OCI Registry Client in Go and tooling using those libraries.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/regclient/regclient/regbot/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/regclient/regclient' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/regclient/regclient/regbot' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/regclient/regclient/regbot -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/regclient/regclient/regbot' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'regbot',
  ] as const,
  companions: [] as const,
  /**
   * Runtime dependencies for this package.
   * These are required when running the package.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Build dependencies for this package.
   * These are only required when building the package from source.
   */
  buildDependencies: [
    'go.dev@^1.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.9.2',
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
  aliases: [] as const,
}

export type RegbotPackage = typeof regbotPackage
