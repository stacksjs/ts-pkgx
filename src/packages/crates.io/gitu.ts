/**
 * **gitu** - Package from pantry: crates.io/gitu
 *
 * @domain `crates.io/gitu`
 *
 * @install `launchpad install crates.io/gitu`
 * @dependencies `zlib.net~1.3`, `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiogitu
 * console.log(pkg.name)        // "gitu"
 * console.log(pkg.description) // "Package from pantry: crates.io/gitu"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/gitu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiogituPackage = {
  /**
   * The display name of this package.
   */
  name: 'gitu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/gitu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/gitu' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/gitu' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/gitu -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/gitu' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net~1.3',
    'libgit2.org~1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/gitu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiogituPackage = typeof cratesiogituPackage
