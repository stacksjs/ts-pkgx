/**
 * **libgit2.org** - Package from pantry: libgit2.org
 *
 * @domain `libgit2.org`
 *
 * @install `launchpad install libgit2.org`
 * @dependencies `libssh2.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libgit2org
 * console.log(pkg.name)        // "libgit2.org"
 * console.log(pkg.description) // "Package from pantry: libgit2.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libgit2-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libgit2orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libgit2.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libgit2.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libgit2.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libgit2.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libgit2.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libgit2.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libssh2.org^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libgit2.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Libgit2orgPackage = typeof libgit2orgPackage
