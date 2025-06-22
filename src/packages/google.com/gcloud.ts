/**
 * **gcloud** - Package from pantry: google.com/gcloud
 *
 * @domain `google.com/gcloud`
 *
 * @install `launchpad install google.com/gcloud`
 * @dependencies `python.org^3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomgcloud
 * console.log(pkg.name)        // "gcloud"
 * console.log(pkg.description) // "Package from pantry: google.com/gcloud"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/gcloud.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomgcloudPackage = {
  /**
   * The display name of this package.
   */
  name: 'gcloud' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/gcloud' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.com/gcloud' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.com/gcloud' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/gcloud -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.com/gcloud' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/gcloud/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GooglecomgcloudPackage = typeof googlecomgcloudPackage
