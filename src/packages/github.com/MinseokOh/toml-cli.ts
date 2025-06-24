/**
 * **toml-cli** - Package from pantry: github.com/MinseokOh/toml-cli
 *
 * @domain `github.com/MinseokOh/toml-cli`
 *
 * @install `launchpad install github.com/MinseokOh/toml-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomminseokohtomlcli
 * console.log(pkg.name)        // "toml-cli"
 * console.log(pkg.description) // "Package from pantry: github.com/MinseokOh/toml-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MinseokOh/toml-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomminseokohtomlcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'toml-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/MinseokOh/toml-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/MinseokOh/toml-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/MinseokOh/toml-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/MinseokOh/toml-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/MinseokOh/toml-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/MinseokOh/toml-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomminseokohtomlcliPackage = typeof githubcomminseokohtomlcliPackage
