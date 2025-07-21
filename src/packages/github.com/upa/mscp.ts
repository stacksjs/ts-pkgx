/**
 * **mscp** - Package from pantry: github.com/upa/mscp
 *
 * @domain `github.com/upa/mscp`
 *
 * @install `launchpad install github.com/upa/mscp`
 * @dependencies `zlib.net^1.2.11`, `openssl.org^1.1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomupamscp
 * console.log(pkg.name)        // "mscp"
 * console.log(pkg.description) // "Package from pantry: github.com/upa/mscp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/upa/mscp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomupamscpPackage = {
  /**
   * The display name of this package.
   */
  name: 'mscp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/upa/mscp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/upa/mscp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/upa/mscp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/upa/mscp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/upa/mscp' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1.2.11',
    'openssl.org^1.1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/upa/mscp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomupamscpPackage = typeof githubcomupamscpPackage
