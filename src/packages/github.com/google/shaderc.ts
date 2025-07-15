/**
 * **shaderc** - Package from pantry: github.com/google/shaderc
 *
 * @domain `github.com/google/shaderc`
 *
 * @install `launchpad install github.com/google/shaderc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgoogleshaderc
 * console.log(pkg.name)        // "shaderc"
 * console.log(pkg.description) // "Package from pantry: github.com/google/shaderc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google/shaderc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgoogleshadercPackage = {
  /**
   * The display name of this package.
   */
  name: 'shaderc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google/shaderc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/google/shaderc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/google/shaderc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/google/shaderc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/google/shaderc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/google/shaderc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgoogleshadercPackage = typeof githubcomgoogleshadercPackage
