/**
 * **cpanmin.us** - Package from pantry: cpanmin.us
 *
 * @domain `cpanmin.us`
 *
 * @install `launchpad install cpanmin.us`
 * @dependencies `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cpanminus
 * console.log(pkg.name)        // "cpanmin.us"
 * console.log(pkg.description) // "Package from pantry: cpanmin.us"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cpanmin-us.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cpanminusPackage = {
  /**
   * The display name of this package.
   */
  name: 'cpanmin.us' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cpanmin.us' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cpanmin.us' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cpanmin.us' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cpanmin.us -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cpanmin.us' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cpanmin.us/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CpanminusPackage = typeof cpanminusPackage
