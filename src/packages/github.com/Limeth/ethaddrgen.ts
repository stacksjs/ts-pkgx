/**
 * **ethaddrgen** - Package from pantry: github.com/Limeth/ethaddrgen
 *
 * @domain `github.com/Limeth/ethaddrgen`
 *
 * @install `launchpad install github.com/Limeth/ethaddrgen`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlimethethaddrgen
 * console.log(pkg.name)        // "ethaddrgen"
 * console.log(pkg.description) // "Package from pantry: github.com/Limeth/ethaddrgen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Limeth/ethaddrgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlimethethaddrgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'ethaddrgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Limeth/ethaddrgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Limeth/ethaddrgen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Limeth/ethaddrgen' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Limeth/ethaddrgen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Limeth/ethaddrgen' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Limeth/ethaddrgen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlimethethaddrgenPackage = typeof githubcomlimethethaddrgenPackage
