/**
 * **zx** - Package from pantry: google.com/zx
 *
 * @domain `google.com/zx`
 *
 * @install `launchpad install google.com/zx`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomzx
 * console.log(pkg.name)        // "zx"
 * console.log(pkg.description) // "Package from pantry: google.com/zx"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/zx.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomzxPackage = {
  /**
   * The display name of this package.
   */
  name: 'zx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/zx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.com/zx' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.com/zx' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/zx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.com/zx' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/zx/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GooglecomzxPackage = typeof googlecomzxPackage
