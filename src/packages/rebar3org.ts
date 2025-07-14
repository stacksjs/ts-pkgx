/**
 * **rebar3.org** - Package from pantry: rebar3.org
 *
 * @domain `rebar3.org`
 *
 * @install `launchpad install rebar3.org`
 * @dependencies `erlang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rebar3org
 * console.log(pkg.name)        // "rebar3.org"
 * console.log(pkg.description) // "Package from pantry: rebar3.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rebar3-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rebar3orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rebar3.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rebar3.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rebar3.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rebar3.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rebar3.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rebar3.org' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rebar3.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Rebar3orgPackage = typeof rebar3orgPackage
