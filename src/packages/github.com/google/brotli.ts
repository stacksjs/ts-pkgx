/**
 * **brotli** - Package from pantry: github.com/google/brotli
 *
 * @domain `github.com/google/brotli`
 *
 * @install `launchpad install github.com/google/brotli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgooglebrotli
 * console.log(pkg.name)        // "brotli"
 * console.log(pkg.description) // "Package from pantry: github.com/google/brotli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google/brotli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgooglebrotliPackage = {
  /**
   * The display name of this package.
   */
  name: 'brotli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google/brotli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/google/brotli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/google/brotli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/google/brotli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/google/brotli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/google/brotli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgooglebrotliPackage = typeof githubcomgooglebrotliPackage
