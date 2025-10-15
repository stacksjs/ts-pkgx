/**
 * **opensearch** - 🔎 Open source distributed and RESTful search engine.
 *
 * @domain `opensearch.org`
 * @programs `opensearch`, `opensearch-keystore`, `opensearch-plugin`, `opensearch-shard`
 * @version `3.0.0` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install opensearch.org`
 * @homepage https://opensearch.org/docs/latest/opensearch/index/
 * @dependencies `openjdk.org^21 # since v3`, `openmp.llvm.org^17`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opensearchorg
 * console.log(pkg.name)        // "opensearch"
 * console.log(pkg.description) // "🔎 Open source distributed and RESTful search e..."
 * console.log(pkg.programs)    // ["opensearch", "opensearch-keystore", ...]
 * console.log(pkg.versions[0]) // "3.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opensearch-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensearchorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'opensearch' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opensearch.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🔎 Open source distributed and RESTful search engine.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opensearch.org/package.yml' as const,
  homepageUrl: 'https://opensearch.org/docs/latest/opensearch/index/' as const,
  githubUrl: 'https://github.com/opensearch-project/OpenSearch' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install opensearch.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +opensearch.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install opensearch.org' as const,
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
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.0.0',
    '2.19.3',
    '2.19.2',
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
  aliases: [] as const,
}

export type OpensearchorgPackage = typeof opensearchorgPackage
