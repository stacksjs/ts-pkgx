/**
 * **fast_float** - Package from pantry: github.com/fastfloat/fast_float
 *
 * @domain `github.com/fastfloat/fast_float`
 *
 * @install `launchpad install github.com/fastfloat/fast_float`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomfastfloatfast_float
 * console.log(pkg.name)        // "fast_float"
 * console.log(pkg.description) // "Package from pantry: github.com/fastfloat/fast_..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/fastfloat/fast_float.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomfastfloatfast_floatPackage = {
  /**
   * The display name of this package.
   */
  name: 'fast_float' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/fastfloat/fast_float' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/fastfloat/fast_float' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/fastfloat/fast_float' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/fastfloat/fast_float -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/fastfloat/fast_float' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/fastfloat/fast_float/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomfastfloatfast_floatPackage = typeof githubcomfastfloatfast_floatPackage
