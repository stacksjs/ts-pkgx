/**
 * **github.com/google/shaderc** - pkgx package
 *
 * @domain `github.com/google/shaderc`
 * @version `2025.3.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/google/shaderc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgoogleshaderc
 * console.log(pkg.name)        // "github.com/google/shaderc"
 * console.log(pkg.versions[0]) // "2025.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google/shaderc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgoogleshadercPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/google/shaderc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google/shaderc' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/google/shaderc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/google/shaderc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.3.0',
    '2025.2.0',
    '2025.1.0',
    '2024.4.0',
    '2024.3.0',
    '2024.2.0',
    '2024.1.0',
    '2024.0.0',
    '2023.8.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/google/shaderc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/google/shaderc' as const,
}

export type GithubcomgoogleshadercPackage = typeof githubcomgoogleshadercPackage
