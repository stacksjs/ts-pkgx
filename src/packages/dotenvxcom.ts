/**
 * **dotenvx.com** - Package from pantry: dotenvx.com
 *
 * @domain `dotenvx.com`
 *
 * @install `launchpad install dotenvx.com`
 * @dependencies `nodejs.org^16 || ^18 || ^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dotenvxcom
 * console.log(pkg.name)        // "dotenvx.com"
 * console.log(pkg.description) // "Package from pantry: dotenvx.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dotenvx-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dotenvxcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'dotenvx.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dotenvx.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dotenvx.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dotenvx.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dotenvx.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dotenvx.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^16 || ^18 || ^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dotenvx.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DotenvxcomPackage = typeof dotenvxcomPackage
