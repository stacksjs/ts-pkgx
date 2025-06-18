/**
 * **oras.land** - Package from pantry: oras.land
 *
 * @domain `oras.land`
 *
 * @install `launchpad install oras.land`
 * @dependencies `go.dev^1.19`, `goreleaser.com`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.orasland
 * console.log(pkg.name)        // "oras.land"
 * console.log(pkg.description) // "Package from pantry: oras.land"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oras-land.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oraslandPackage = {
  /**
   * The display name of this package.
   */
  name: 'oras.land' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oras.land' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: oras.land' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install oras.land' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
    'goreleaser.com',
    'git-scm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oras.land/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OraslandPackage = typeof oraslandPackage
