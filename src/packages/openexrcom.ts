/**
 * **openexr.com** - Package from pantry: openexr.com
 *
 * @domain `openexr.com`
 *
 * @install `launchpad install openexr.com`
 * @dependencies `zlib.net^1`, `openexr.com/imath`, `cmake.org`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openexrcom
 * console.log(pkg.name)        // "openexr.com"
 * console.log(pkg.description) // "Package from pantry: openexr.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openexr-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openexrcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'openexr.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openexr.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openexr.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install openexr.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'openexr.com/imath',
    'cmake.org',
    'freedesktop.org/pkg-config',
    'git-scm.org',
    'gnu.org/wget',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openexr.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenexrcomPackage = typeof openexrcomPackage
