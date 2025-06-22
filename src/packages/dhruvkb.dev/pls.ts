/**
 * **pls** - Package from pantry: dhruvkb.dev/pls
 *
 * @domain `dhruvkb.dev/pls`
 *
 * @install `launchpad install dhruvkb.dev/pls`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dhruvkbdevpls
 * console.log(pkg.name)        // "pls"
 * console.log(pkg.description) // "Package from pantry: dhruvkb.dev/pls"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dhruvkb-dev/pls.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dhruvkbdevplsPackage = {
  /**
   * The display name of this package.
   */
  name: 'pls' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dhruvkb.dev/pls' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dhruvkb.dev/pls' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dhruvkb.dev/pls' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dhruvkb.dev/pls -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dhruvkb.dev/pls' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dhruvkb.dev/pls/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DhruvkbdevplsPackage = typeof dhruvkbdevplsPackage
