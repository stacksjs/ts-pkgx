/**
 * **hatch.pypa.io** - Package from pantry: hatch.pypa.io
 *
 * @domain `hatch.pypa.io`
 *
 * @install `launchpad install hatch.pypa.io`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hatchpypaio
 * console.log(pkg.name)        // "hatch.pypa.io"
 * console.log(pkg.description) // "Package from pantry: hatch.pypa.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hatch-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hatchpypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hatch.pypa.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hatch.pypa.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hatch.pypa.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install hatch.pypa.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hatch.pypa.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HatchpypaioPackage = typeof hatchpypaioPackage
