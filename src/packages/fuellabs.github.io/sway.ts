/**
 * **sway** - Package from pantry: fuellabs.github.io/sway
 *
 * @domain `fuellabs.github.io/sway`
 *
 * @install `launchpad install fuellabs.github.io/sway`
 * @dependencies `zlib.net^1`, `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fuellabsgithubiosway
 * console.log(pkg.name)        // "sway"
 * console.log(pkg.description) // "Package from pantry: fuellabs.github.io/sway"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fuellabs-github-io/sway.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fuellabsgithubioswayPackage = {
  /**
   * The display name of this package.
   */
  name: 'sway' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fuellabs.github.io/sway' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fuellabs.github.io/sway' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fuellabs.github.io/sway' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fuellabs.github.io/sway -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fuellabs.github.io/sway' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fuellabs.github.io/sway/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FuellabsgithubioswayPackage = typeof fuellabsgithubioswayPackage
