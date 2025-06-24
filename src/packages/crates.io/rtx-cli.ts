/**
 * **rtx-cli** - Package from pantry: crates.io/rtx-cli
 *
 * @domain `crates.io/rtx-cli`
 *
 * @install `launchpad install crates.io/rtx-cli`
 * @dependencies `openssl.org^1.1 # newer RTX after 1.35.2 versions require openssl`, `libgit2.org^1 # newer mise after 2024.5.12 versions require libgit2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiortxcli
 * console.log(pkg.name)        // "rtx-cli"
 * console.log(pkg.description) // "Package from pantry: crates.io/rtx-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rtx-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiortxcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'rtx-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rtx-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/rtx-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/rtx-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/rtx-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/rtx-cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1 # newer RTX after 1.35.2 versions require openssl',
    'libgit2.org^1 # newer mise after 2024.5.12 versions require libgit2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/rtx-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiortxcliPackage = typeof cratesiortxcliPackage
