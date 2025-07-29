/**
 * **toml-cli** - A simple CLI for editing and querying TOML files.
 *
 * @domain `github.com/MinseokOh/toml-cli`
 * @programs `toml-cli`
 * @version `0.1.3` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install toml-cli`
 * @name `toml-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tomlcli
 * // Or access via domain
 * const samePkg = pantry.githubcomminseokohtomlcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "toml-cli"
 * console.log(pkg.description) // "A simple CLI for editing and querying TOML files."
 * console.log(pkg.programs)    // ["toml-cli"]
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
  description: 'A simple CLI for editing and querying TOML files.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/MinseokOh/toml-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install toml-cli' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'toml-cli',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.3',
    '0.1.2',
    '0.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) toml-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install toml-cli' as const,
}

export type TomlcliPackage = typeof tomlcliPackage
