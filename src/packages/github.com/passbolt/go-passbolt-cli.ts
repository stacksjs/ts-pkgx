/**
 * **passbolt** - A CLI tool to interact  with Passbolt, a Open source Password Manager for Teams
 *
 * @domain `github.com/passbolt/go-passbolt-cli`
 * @programs `passbolt`
 * @version `0.3.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install passbolt`
 * @name `go-passbolt-cli`
 * @aliases `passbolt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.passbolt
 * // Or access via domain
 * const samePkg = pantry.githubcompassboltgopassboltcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "go-passbolt-cli"
 * console.log(pkg.description) // "A CLI tool to interact  with Passbolt, a Open s..."
 * console.log(pkg.programs)    // ["passbolt"]
 * console.log(pkg.versions[0]) // "0.3.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/passbolt/go-passbolt-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const passboltPackage = {
  /**
   * The display name of this package.
   */
  name: 'go-passbolt-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/passbolt/go-passbolt-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A CLI tool to interact  with Passbolt, a Open source Password Manager for Teams' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/passbolt/go-passbolt-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install passbolt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'passbolt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.2',
    '0.3.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'passbolt',
  ] as const,
}

export type PassboltPackage = typeof passboltPackage
