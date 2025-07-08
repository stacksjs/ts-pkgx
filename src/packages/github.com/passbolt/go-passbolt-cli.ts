/**
 * **go-passbolt-cli** - Package from pantry: github.com/passbolt/go-passbolt-cli
 *
 * @domain `github.com/passbolt/go-passbolt-cli`
 *
 * @install `launchpad install github.com/passbolt/go-passbolt-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompassboltgopassboltcli
 * console.log(pkg.name)        // "go-passbolt-cli"
 * console.log(pkg.description) // "Package from pantry: github.com/passbolt/go-pas..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/passbolt/go-passbolt-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompassboltgopassboltcliPackage = {
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
  description: 'Package from pantry: github.com/passbolt/go-passbolt-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/passbolt/go-passbolt-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/passbolt/go-passbolt-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/passbolt/go-passbolt-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/passbolt/go-passbolt-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompassboltgopassboltcliPackage = typeof githubcompassboltgopassboltcliPackage
