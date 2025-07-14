/**
 * **dynein** - Package from pantry: github.com/awslabs/dynein
 *
 * @domain `github.com/awslabs/dynein`
 *
 * @install `launchpad install github.com/awslabs/dynein`
 * @dependencies `linux:openssl.org^1.1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomawslabsdynein
 * console.log(pkg.name)        // "dynein"
 * console.log(pkg.description) // "Package from pantry: github.com/awslabs/dynein"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/dynein.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomawslabsdyneinPackage = {
  /**
   * The display name of this package.
   */
  name: 'dynein' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/awslabs/dynein' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/awslabs/dynein' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/awslabs/dynein' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/awslabs/dynein -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/awslabs/dynein' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/awslabs/dynein/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomawslabsdyneinPackage = typeof githubcomawslabsdyneinPackage
