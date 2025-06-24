/**
 * **jwt-cli** - Package from pantry: crates.io/jwt-cli
 *
 * @domain `crates.io/jwt-cli`
 *
 * @install `launchpad install crates.io/jwt-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiojwtcli
 * console.log(pkg.name)        // "jwt-cli"
 * console.log(pkg.description) // "Package from pantry: crates.io/jwt-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/jwt-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiojwtcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'jwt-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/jwt-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/jwt-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/jwt-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/jwt-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/jwt-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/jwt-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiojwtcliPackage = typeof cratesiojwtcliPackage
