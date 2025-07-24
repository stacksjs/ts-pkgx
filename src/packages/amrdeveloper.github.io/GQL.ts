/**
 * **GQL** - pkgx package
 *
 * @domain `amrdeveloper.github.io/GQL`
 *
 * @install `launchpad install amrdeveloper.github.io/GQL`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.amrdevelopergithubiogql
 * console.log(pkg.name)        // "GQL"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/amrdeveloper-github-io/GQL.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const amrdevelopergithubiogqlPackage = {
  /**
   * The display name of this package.
   */
  name: 'GQL' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'amrdeveloper.github.io/GQL' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install amrdeveloper.github.io/GQL' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +amrdeveloper.github.io/GQL -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install amrdeveloper.github.io/GQL' as const,
}

export type AmrdevelopergithubiogqlPackage = typeof amrdevelopergithubiogqlPackage
