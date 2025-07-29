/**
 * **gifsicle** - Package from pantry: lcdf.org/gifsicle
 *
 * @domain `lcdf.org/gifsicle`
 *
 * @install `launchpad install lcdf.org/gifsicle`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lcdforggifsicle
 * console.log(pkg.name)        // "gifsicle"
 * console.log(pkg.description) // "Package from pantry: lcdf.org/gifsicle"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lcdf-org/gifsicle.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lcdforggifsiclePackage = {
  /**
   * The display name of this package.
   */
  name: 'gifsicle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lcdf.org/gifsicle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lcdf.org/gifsicle' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lcdf.org/gifsicle' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lcdf.org/gifsicle -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lcdf.org/gifsicle' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lcdf.org/gifsicle/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LcdforggifsiclePackage = typeof lcdforggifsiclePackage
