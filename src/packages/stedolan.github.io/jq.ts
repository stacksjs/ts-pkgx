/**
 * **jq** - Package from pantry: stedolan.github.io/jq
 *
 * @domain `stedolan.github.io/jq`
 *
 * @install `launchpad install stedolan.github.io/jq`
 * @dependencies `github.com/kkos/oniguruma@6`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.stedolangithubiojq
 * console.log(pkg.name)        // "jq"
 * console.log(pkg.description) // "Package from pantry: stedolan.github.io/jq"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/stedolan-github-io/jq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stedolangithubiojqPackage = {
  /**
   * The display name of this package.
   */
  name: 'jq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'stedolan.github.io/jq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: stedolan.github.io/jq' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install stedolan.github.io/jq' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/kkos/oniguruma@6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/stedolan.github.io/jq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type StedolangithubiojqPackage = typeof stedolangithubiojqPackage
