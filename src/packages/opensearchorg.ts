/**
 * **opensearch.org** - Package from pantry: opensearch.org
 *
 * @domain `opensearch.org`
 *
 * @install `launchpad install opensearch.org`
 * @dependencies `openjdk.org^21 # since v3`, `openmp.llvm.org^17`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opensearchorg
 * console.log(pkg.name)        // "opensearch.org"
 * console.log(pkg.description) // "Package from pantry: opensearch.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opensearch-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opensearchorgPackage = {
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
  description: 'Package from pantry: opensearch.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install opensearch.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^21 # since v3',
    'openmp.llvm.org^17',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opensearch.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpensearchorgPackage = typeof opensearchorgPackage
