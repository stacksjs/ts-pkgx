/**
 * **toml-cli** - pkgx package
 *
 * @domain `github.com/MinseokOh/toml-cli`
 * @version `0.1.3` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/MinseokOh/toml-cli`
 * @buildDependencies `go.dev@^1.20` - required only when building from source
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomminseokohtomlcli
 * console.log(pkg.name)        // "toml-cli"
 * console.log(pkg.versions[0]) // "0.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/MinseokOh/toml-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tomlcliPackage = {
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/MinseokOh/toml-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
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
  /**
   * Build dependencies for this package.
   * These are only required when building the package from source.
   */
  buildDependencies: [
    'go.dev@^1.20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.3',
    '0.1.2',
    '0.1.1',
  ] as const,
  aliases: [] as const,
}

export type TomlcliPackage = typeof tomlcliPackage
