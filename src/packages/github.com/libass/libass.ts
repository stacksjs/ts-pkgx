/**
 * **libass** - Package from pantry: github.com/libass/libass
 *
 * @domain `github.com/libass/libass`
 *
 * @install `launchpad install github.com/libass/libass`
 * @dependencies `freetype.org@2`, `gnu.org/fribidi@1`, `harfbuzz.org`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlibasslibass
 * console.log(pkg.name)        // "libass"
 * console.log(pkg.description) // "Package from pantry: github.com/libass/libass"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libass/libass.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlibasslibassPackage = {
  /**
   * The display name of this package.
   */
  name: 'libass' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libass/libass' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/libass/libass' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/libass/libass' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/libass/libass -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/libass/libass' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'freetype.org@2',
    'gnu.org/fribidi@1',
    'harfbuzz.org',
    'github.com/adah1972/libunibreak',
    'linux:freedesktop.org/fontconfig@2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libass/libass/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomlibasslibassPackage = typeof githubcomlibasslibassPackage
