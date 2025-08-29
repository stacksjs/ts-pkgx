/**
 * **elixir-lang.org/otp-27** - pkgx package
 *
 * @domain `elixir-lang.org/otp-27`
 * @version `1.18.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install elixir-lang.org/otp-27`
 * @dependencies `erlang.org^27`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elixirlangorgotp27
 * console.log(pkg.name)        // "elixir-lang.org/otp-27"
 * console.log(pkg.versions[0]) // "1.18.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elixir-lang-org/otp-27.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elixirlangorgotp27Package = {
  /**
   * The display name of this package.
   */
  name: 'elixir-lang.org/otp-27' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elixir-lang.org/otp-27' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elixir-lang.org/otp-27/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install elixir-lang.org/otp-27' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'erlang.org^27',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.18.4',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +elixir-lang.org/otp-27 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install elixir-lang.org/otp-27' as const,
}

export type Elixirlangorgotp27Package = typeof elixirlangorgotp27Package
