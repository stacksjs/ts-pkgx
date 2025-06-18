/**
 * **skaffold.dev** - Package from pantry: skaffold.dev
 *
 * @domain `skaffold.dev`
 *
 * @install `launchpad install skaffold.dev`
 * @dependencies `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.skaffolddev
 * console.log(pkg.name)        // "skaffold.dev"
 * console.log(pkg.description) // "Package from pantry: skaffold.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/skaffold-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const skaffolddevPackage = {
  /**
   * The display name of this package.
   */
  name: 'skaffold.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'skaffold.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: skaffold.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install skaffold.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/skaffold.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SkaffolddevPackage = typeof skaffolddevPackage
