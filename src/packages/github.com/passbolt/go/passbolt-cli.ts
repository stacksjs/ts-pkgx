/**
 * **github.com/passbolt/go-passbolt-cli** - pkgx package
 *
 * @domain `github.com/passbolt/go/passbolt-cli`
 *
 * @install `pkgx github.com/passbolt/go-passbolt-cli`
 * @aliases `github.com/passbolt/go-passbolt-cli`, `passbolt/go-passbolt-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcompassboltgopassboltcli
 * // Or access via domain
 * const samePkg = pantry.githubcompassboltgopassboltcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "passbolt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/passbolt/go/passbolt-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompassboltgopassboltcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'passbolt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/passbolt/go/passbolt-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/passbolt/go-passbolt-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/passbolt/go-passbolt-cli',
    'passbolt/go-passbolt-cli',
  ] as const,
  fullPath: 'github.com/passbolt/go-passbolt-cli' as const,
}

export type GithubcompassboltgopassboltcliPackage = typeof githubcompassboltgopassboltcliPackage
