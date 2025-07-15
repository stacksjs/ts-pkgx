/**
 * **fastgron** - Package from pantry: github.com/adamritter/fastgron
 *
 * @domain `github.com/adamritter/fastgron`
 *
 * @install `launchpad install github.com/adamritter/fastgron`
 * @dependencies `curl.se`, `linux:gnu.org/gcc` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomadamritterfastgron
 * console.log(pkg.name)        // "fastgron"
 * console.log(pkg.description) // "Package from pantry: github.com/adamritter/fast..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adamritter/fastgron.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomadamritterfastgronPackage = {
  /**
   * The display name of this package.
   */
  name: 'fastgron' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adamritter/fastgron' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/adamritter/fastgron' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/adamritter/fastgron' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/adamritter/fastgron -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/adamritter/fastgron' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'curl.se',
    'linux:gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adamritter/fastgron/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomadamritterfastgronPackage = typeof githubcomadamritterfastgronPackage
