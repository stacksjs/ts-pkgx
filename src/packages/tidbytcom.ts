/**
 * **tidbyt.com** - Package from pantry: tidbyt.com
 *
 * @domain `tidbyt.com`
 *
 * @install `launchpad install tidbyt.com`
 * @dependencies `google.com/webp^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tidbytcom
 * console.log(pkg.name)        // "tidbyt.com"
 * console.log(pkg.description) // "Package from pantry: tidbyt.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tidbyt-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tidbytcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'tidbyt.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tidbyt.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tidbyt.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tidbyt.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +tidbyt.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install tidbyt.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'google.com/webp^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tidbyt.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TidbytcomPackage = typeof tidbytcomPackage
