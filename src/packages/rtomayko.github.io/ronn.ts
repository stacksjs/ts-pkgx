/**
 * **ronn** - Package from pantry: rtomayko.github.io/ronn
 *
 * @domain `rtomayko.github.io/ronn`
 *
 * @install `launchpad install rtomayko.github.io/ronn`
 * @dependencies `ruby-lang.org^3.1`, `rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rtomaykogithubioronn
 * console.log(pkg.name)        // "ronn"
 * console.log(pkg.description) // "Package from pantry: rtomayko.github.io/ronn"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rtomayko-github-io/ronn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rtomaykogithubioronnPackage = {
  /**
   * The display name of this package.
   */
  name: 'ronn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rtomayko.github.io/ronn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rtomayko.github.io/ronn' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rtomayko.github.io/ronn' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rtomayko.github.io/ronn -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rtomayko.github.io/ronn' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'ruby-lang.org^3.1',
    'rubygems.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rtomayko.github.io/ronn/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RtomaykogithubioronnPackage = typeof rtomaykogithubioronnPackage
