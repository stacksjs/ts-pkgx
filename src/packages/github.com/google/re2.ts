/**
 * **re2** - RE2 is a fast, safe, thread-friendly alternative to backtracking regular expression engines like those used in PCRE, Perl, and Python. It is a C++ library.
 *
 * @domain `github.com/google/re2`
 * @version `2024.7.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/google/re2 -- $SHELL -i`
 * @dependencies `abseil.io^20250127`, `cmake.org`, `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgooglere2
 * console.log(pkg.name)        // "re2"
 * console.log(pkg.description) // "RE2 is a fast, safe, thread-friendly alternativ..."
 * console.log(pkg.versions[0]) // "2024.7.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/google/re2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgooglere2Package = {
  /**
   * The display name of this package.
   */
  name: 're2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/google/re2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'RE2 is a fast, safe, thread-friendly alternative to backtracking regular expression engines like those used in PCRE, Perl, and Python. It is a C++ library.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/google/re2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/google/re2 -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'abseil.io^20250127',
    'cmake.org',
    'gnu.org/gcc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2024.7.2',
    '2024.7.1',
    '2024.6.1',
    '2023.3.1',
  ] as const,
  aliases: [] as const,
}

export type Githubcomgooglere2Package = typeof githubcomgooglere2Package
