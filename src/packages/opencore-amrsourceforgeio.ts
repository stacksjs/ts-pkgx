/**
 * **opencore-amr.sourceforge.io** - Package from pantry: opencore-amr.sourceforge.io
 *
 * @domain `opencore-amr.sourceforge.io`
 *
 * @install `launchpad install opencore-amr.sourceforge.io`
 * @dependencies `freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opencoreamrsourceforgeio
 * console.log(pkg.name)        // "opencore-amr.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: opencore-amr.sourceforge.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opencore-amr-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opencoreamrsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencore-amr.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opencore-amr.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: opencore-amr.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install opencore-amr.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opencore-amr.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpencoreamrsourceforgeioPackage = typeof opencoreamrsourceforgeioPackage
