/**
 * **libheif** - Package from pantry: github.com/strukturag/libheif
 *
 * @domain `github.com/strukturag/libheif`
 *
 * @install `launchpad install github.com/strukturag/libheif`
 * @dependencies `aomedia.googlesource.com/aom`, `libjpeg-turbo.org`, `github.com/strukturag/libde265`, ... (+4 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomstrukturaglibheif
 * console.log(pkg.name)        // "libheif"
 * console.log(pkg.description) // "Package from pantry: github.com/strukturag/libheif"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/strukturag/libheif.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomstrukturaglibheifPackage = {
  /**
   * The display name of this package.
   */
  name: 'libheif' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/strukturag/libheif' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/strukturag/libheif' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/strukturag/libheif' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/strukturag/libheif -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/strukturag/libheif' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'aomedia.googlesource.com/aom',
    'libjpeg-turbo.org',
    'github.com/strukturag/libde265',
    'libpng.org',
    'freedesktop.org/shared-mime-info',
    'videolan.org/x265@3.2',
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/strukturag/libheif/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomstrukturaglibheifPackage = typeof githubcomstrukturaglibheifPackage
