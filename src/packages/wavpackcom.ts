/**
 * **wavpack.com** - Package from pantry: wavpack.com
 *
 * @domain `wavpack.com`
 *
 * @install `launchpad install wavpack.com`
 * @dependencies `gnu.org/patch`, `gnu.org/diffutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wavpackcom
 * console.log(pkg.name)        // "wavpack.com"
 * console.log(pkg.description) // "Package from pantry: wavpack.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wavpack-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wavpackcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'wavpack.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wavpack.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wavpack.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install wavpack.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/patch',
    'gnu.org/diffutils',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wavpack.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WavpackcomPackage = typeof wavpackcomPackage
