/**
 * **pugixml.org** - Package from pantry: pugixml.org
 *
 * @domain `pugixml.org`
 *
 * @install `launchpad install pugixml.org`
 * @dependencies `cmake.org`, `freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pugixmlorg
 * console.log(pkg.name)        // "pugixml.org"
 * console.log(pkg.description) // "Package from pantry: pugixml.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pugixml-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pugixmlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pugixml.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pugixml.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pugixml.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pugixml.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pugixml.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PugixmlorgPackage = typeof pugixmlorgPackage
