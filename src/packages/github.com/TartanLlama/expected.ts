/**
 * **github.com/tartanllama/expected** - C++11/14/17 std::expected with functional-style extensions
 *
 * @domain `github.com/TartanLlama/expected`
 * @version `1.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/TartanLlama/expected -- $SHELL -i`
 * @aliases `github.com/tartanllama/expected`, `TartanLlama/expected`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomtartanllamaexpected
 * // Or access via domain
 * const samePkg = pantry.githubcomtartanllamaexpected
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/TartanLlama/expected"
 * console.log(pkg.description) // "C++11/14/17 std::expected with functional-style..."
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/TartanLlama/expected -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/tartanllama/expected',
    'TartanLlama/expected',
  ] as const,
  fullPath: 'github.com/TartanLlama/expected' as const,
}

export type GithubcomtartanllamaexpectedPackage = typeof githubcomtartanllamaexpectedPackage
