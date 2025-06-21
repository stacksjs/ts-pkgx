/**
 * **duckscript** - Package from pantry: sagiegurari.github.io/duckscript
 *
 * @domain `sagiegurari.github.io/duckscript`
 *
 * @install `launchpad install sagiegurari.github.io/duckscript`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sagiegurarigithubioduckscript
 * console.log(pkg.name)        // "duckscript"
 * console.log(pkg.description) // "Package from pantry: sagiegurari.github.io/duck..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sagiegurari-github-io/duckscript.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sagiegurarigithubioduckscriptPackage = {
  /**
   * The display name of this package.
   */
  name: 'duckscript' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sagiegurari.github.io/duckscript' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sagiegurari.github.io/duckscript' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sagiegurari.github.io/duckscript' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sagiegurari.github.io/duckscript/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SagiegurarigithubioduckscriptPackage = typeof sagiegurarigithubioduckscriptPackage
