/**
 * **kaggle.com** - Package from pantry: kaggle.com
 *
 * @domain `kaggle.com`
 *
 * @install `launchpad install kaggle.com`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kagglecom
 * console.log(pkg.name)        // "kaggle.com"
 * console.log(pkg.description) // "Package from pantry: kaggle.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kaggle-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kagglecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'kaggle.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kaggle.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: kaggle.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install kaggle.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +kaggle.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install kaggle.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kaggle.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KagglecomPackage = typeof kagglecomPackage
