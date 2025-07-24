/**
 * **bittensor.com** - Package from pantry: bittensor.com
 *
 * @domain `bittensor.com`
 *
 * @install `launchpad install bittensor.com`
 * @dependencies `pkgx.sh^1`, `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bittensorcom
 * console.log(pkg.name)        // "bittensor.com"
 * console.log(pkg.description) // "Package from pantry: bittensor.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bittensor-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bittensorcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'bittensor.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bittensor.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: bittensor.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bittensor.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bittensor.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bittensor.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bittensor.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BittensorcomPackage = typeof bittensorcomPackage
