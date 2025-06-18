/**
 * **ladspa.org** - Package from pantry: ladspa.org
 *
 * @domain `ladspa.org`
 *
 * @install `launchpad install ladspa.org`
 * @dependencies `github.com/libsndfile/libsndfile^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ladspaorg
 * console.log(pkg.name)        // "ladspa.org"
 * console.log(pkg.description) // "Package from pantry: ladspa.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ladspa-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ladspaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ladspa.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ladspa.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ladspa.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ladspa.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/libsndfile/libsndfile^1.2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ladspa.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LadspaorgPackage = typeof ladspaorgPackage
