/**
 * **btop** - Package from pantry: github.com/aristocratos/btop
 *
 * @domain `github.com/aristocratos/btop`
 *
 * @install `launchpad install github.com/aristocratos/btop`
 * @dependencies `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomaristocratosbtop
 * console.log(pkg.name)        // "btop"
 * console.log(pkg.description) // "Package from pantry: github.com/aristocratos/btop"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aristocratos/btop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomaristocratosbtopPackage = {
  /**
   * The display name of this package.
   */
  name: 'btop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aristocratos/btop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/aristocratos/btop' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/aristocratos/btop' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/aristocratos/btop -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/aristocratos/btop' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/aristocratos/btop/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomaristocratosbtopPackage = typeof githubcomaristocratosbtopPackage
