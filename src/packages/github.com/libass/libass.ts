/**
 * **github.com/libass/libass** - pkgx package
 *
 * @domain `github.com/libass/libass`
 * @version `0.17.4` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/libass/libass`
 * @dependencies `freetype.org@2`, `gnu.org/fribidi@1`, `harfbuzz.org`, ... (+2 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomlibasslibass
 * console.log(pkg.name)        // "github.com/libass/libass"
 * console.log(pkg.versions[0]) // "0.17.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libass/libass.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlibasslibassPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/libass/libass' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libass/libass' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libass/libass/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/libass/libass' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.17.4',
    '0.17.3',
    '0.17.2',
    '0.17.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/libass/libass -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/libass/libass' as const,
}

export type GithubcomlibasslibassPackage = typeof githubcomlibasslibassPackage
