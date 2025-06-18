/**
 * **ijg.org** - Package from pantry: ijg.org
 *
 * @domain `ijg.org`
 *
 * @install `launchpad install ijg.org`
 * @dependencies `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ijgorg
 * console.log(pkg.name)        // "ijg.org"
 * console.log(pkg.description) // "Package from pantry: ijg.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ijg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ijgorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ijg.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ijg.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ijg.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ijg.org' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ijg.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IjgorgPackage = typeof ijgorgPackage
