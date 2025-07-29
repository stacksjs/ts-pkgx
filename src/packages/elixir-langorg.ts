/**
 * **elixir-lang.org** - Package from pantry: elixir-lang.org
 *
 * @domain `elixir-lang.org`
 *
 * @install `launchpad install elixir-lang.org`
 * @dependencies `erlang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elixirlangorg
 * console.log(pkg.name)        // "elixir-lang.org"
 * console.log(pkg.description) // "Package from pantry: elixir-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elixir-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elixirlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'elixir-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elixir-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: elixir-lang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install elixir-lang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +elixir-lang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install elixir-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'erlang.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elixir-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ElixirlangorgPackage = typeof elixirlangorgPackage
