/**
 * **github.com/TartanLlama/expected** - C++11/14/17 std::expected with functional-style extensions
 *
 * @domain `github.com/TartanLlama/expected`
 * @version `1.2.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/TartanLlama/expected`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomtartanllamaexpected
 * console.log(pkg.name)        // "github.com/TartanLlama/expected"
 * console.log(pkg.description) // "C++11/14/17 std::expected with functional-style..."
 * console.log(pkg.versions[0]) // "1.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/TartanLlama/expected.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomtartanllamaexpectedPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/TartanLlama/expected' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/TartanLlama/expected' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'C++11/14/17 std::expected with functional-style extensions' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/TartanLlama/expected/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/TartanLlama/expected' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.0',
    '1.1.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/TartanLlama/expected -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/TartanLlama/expected' as const,
}

export type GithubcomtartanllamaexpectedPackage = typeof githubcomtartanllamaexpectedPackage
