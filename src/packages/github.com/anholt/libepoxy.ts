/**
 * **libepoxy** - Package from pantry: github.com/anholt/libepoxy
 *
 * @domain `github.com/anholt/libepoxy`
 *
 * @install `launchpad install github.com/anholt/libepoxy`
 * @dependencies `linux:x.org/x11`, `linux:mesa3d.org` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomanholtlibepoxy
 * console.log(pkg.name)        // "libepoxy"
 * console.log(pkg.description) // "Package from pantry: github.com/anholt/libepoxy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/anholt/libepoxy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomanholtlibepoxyPackage = {
  /**
   * The display name of this package.
   */
  name: 'libepoxy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/anholt/libepoxy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/anholt/libepoxy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/anholt/libepoxy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/anholt/libepoxy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/anholt/libepoxy' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:x.org/x11',
    'linux:mesa3d.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/anholt/libepoxy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomanholtlibepoxyPackage = typeof githubcomanholtlibepoxyPackage
