/**
 * **factotum** - Package from pantry: github.com/snowplow/factotum
 *
 * @domain `github.com/snowplow/factotum`
 *
 * @install `launchpad install github.com/snowplow/factotum`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsnowplowfactotum
 * console.log(pkg.name)        // "factotum"
 * console.log(pkg.description) // "Package from pantry: github.com/snowplow/factotum"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/snowplow/factotum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsnowplowfactotumPackage = {
  /**
   * The display name of this package.
   */
  name: 'factotum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/snowplow/factotum' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/snowplow/factotum' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/snowplow/factotum' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/snowplow/factotum -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/snowplow/factotum' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/snowplow/factotum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsnowplowfactotumPackage = typeof githubcomsnowplowfactotumPackage
