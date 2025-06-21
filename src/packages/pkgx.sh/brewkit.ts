/**
 * **brewkit** - Package from pantry: pkgx.sh/brewkit
 *
 * @domain `pkgx.sh/brewkit`
 *
 * @install `launchpad install pkgx.sh/brewkit`
 * @dependencies `deno.land~1.39  # 1.40 shouts unskippable deprecation warnings`, `gnu.org/bash^5`, `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkgxshbrewkit
 * console.log(pkg.name)        // "brewkit"
 * console.log(pkg.description) // "Package from pantry: pkgx.sh/brewkit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/brewkit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxshbrewkitPackage = {
  /**
   * The display name of this package.
   */
  name: 'brewkit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh/brewkit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pkgx.sh/brewkit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pkgx.sh/brewkit' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'deno.land~1.39  # 1.40 shouts unskippable deprecation warnings',
    'gnu.org/bash^5',
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/brewkit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PkgxshbrewkitPackage = typeof pkgxshbrewkitPackage
