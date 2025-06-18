/**
 * **opensearch** - 🔎 Open source distributed and RESTful search engine.
 *
 * @domain `opensearch.org`
 * @programs `opensearch`, `opensearch-keystore`, `opensearch-plugin`, `opensearch-shard`
 * @version `3.0.0` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +opensearch.org -- $SHELL -i`
 * @aliases `opensearch`
 * @dependencies `openjdk.org^21 # since v3`, `openmp.llvm.org^17`, `cmake.org@3`, ... (+7 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.opensearch
 * // Or access via domain
 * const samePkg = pantry.opensearchorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "opensearch.org"
 * console.log(pkg.description) // "🔎 Open source distributed and RESTful search e..."
 * console.log(pkg.programs)    // ["opensearch", "opensearch-keystore", ...]
 * console.log(pkg.versions[0]) // "3.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opensearch-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensearchPackage = {
  /**
   * The display name of this package.
   */
  name: 'opensearch.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opensearch.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🔎 Open source distributed and RESTful search engine.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opensearch.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +opensearch.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'opensearch',
    'opensearch-keystore',
    'opensearch-plugin',
    'opensearch-shard',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^21 # since v3',
    'openmp.llvm.org^17',
    'cmake.org@3',
    'git-scm.org',
    'gnu.org/wget',
    'gnu.org/gcc^12 # for gfortran',
    'openblas.net',
    'gnu.org/coreutils^9',
    'stedolan.github.io/jq',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.0',
    '2.19.1',
    '2.18.0',
    '2.17.1',
    '2.17.0',
    '2.16.0',
    '2.15.0',
    '2.14.0',
    '2.13.0',
    '2.12.0',
    '2.11.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'opensearch',
  ] as const,
}

export type OpensearchPackage = typeof opensearchPackage
