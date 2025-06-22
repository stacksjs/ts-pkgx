/**
 * **joshuto** - Package from pantry: crates.io/joshuto
 *
 * @domain `crates.io/joshuto`
 *
 * @install `launchpad install crates.io/joshuto`
 * @dependencies `libgit2.org@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiojoshuto
 * console.log(pkg.name)        // "joshuto"
 * console.log(pkg.description) // "Package from pantry: crates.io/joshuto"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/joshuto.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiojoshutoPackage = {
  /**
   * The display name of this package.
   */
  name: 'joshuto' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/joshuto' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/joshuto' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/joshuto' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/joshuto -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/joshuto' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/joshuto/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiojoshutoPackage = typeof cratesiojoshutoPackage
