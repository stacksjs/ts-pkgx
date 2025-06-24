/**
 * **glog** - Package from pantry: google.com/glog
 *
 * @domain `google.com/glog`
 *
 * @install `launchpad install google.com/glog`
 * @dependencies `gflags.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomglog
 * console.log(pkg.name)        // "glog"
 * console.log(pkg.description) // "Package from pantry: google.com/glog"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/glog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomglogPackage = {
  /**
   * The display name of this package.
   */
  name: 'glog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/glog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.com/glog' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.com/glog' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/glog -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.com/glog' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gflags.github.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/glog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GooglecomglogPackage = typeof googlecomglogPackage
