/**
 * **snappy** - Package from pantry: google.github.io/snappy
 *
 * @domain `google.github.io/snappy`
 *
 * @install `launchpad install google.github.io/snappy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlegithubiosnappy
 * console.log(pkg.name)        // "snappy"
 * console.log(pkg.description) // "Package from pantry: google.github.io/snappy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-github-io/snappy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlegithubiosnappyPackage = {
  /**
   * The display name of this package.
   */
  name: 'snappy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.github.io/snappy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.github.io/snappy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.github.io/snappy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.github.io/snappy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.github.io/snappy' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.github.io/snappy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GooglegithubiosnappyPackage = typeof googlegithubiosnappyPackage
