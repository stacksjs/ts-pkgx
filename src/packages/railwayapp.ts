/**
 * **railway.app** - Package from pantry: railway.app
 *
 * @domain `railway.app`
 *
 * @install `launchpad install railway.app`
 * @dependencies `rust-lang.org^1.77`, `rust-lang.org/cargo<0.83`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.railwayapp
 * console.log(pkg.name)        // "railway.app"
 * console.log(pkg.description) // "Package from pantry: railway.app"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/railway-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const railwayappPackage = {
  /**
   * The display name of this package.
   */
  name: 'railway.app' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'railway.app' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: railway.app' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install railway.app' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.77',
    'rust-lang.org/cargo<0.83',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/railway.app/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RailwayappPackage = typeof railwayappPackage
