/**
 * **regctl** - Docker and OCI Registry Client in Go and tooling using those libraries.
 *
 * @domain `github.com/regclient/regclient/regctl`
 * @programs `regctl`
 * @version `0.9.2` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install regctl`
 * @name `regctl`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.regctl
 * // Or access via domain
 * const samePkg = pantry.githubcomregclientregclientregctl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "regctl"
 * console.log(pkg.description) // "Docker and OCI Registry Client in Go and toolin..."
 * console.log(pkg.programs)    // ["regctl"]
 * console.log(pkg.versions[0]) // "0.9.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/regclient/regclient/regctl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const regctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'regctl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/regclient/regclient/regctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Docker and OCI Registry Client in Go and tooling using those libraries.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/regclient/regclient/regctl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/regclient/regclient' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install regctl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'regctl',
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) regctl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install regctl' as const,
}

export type RegctlPackage = typeof regctlPackage
