/**
 * **sphinx-doc.org** - Package from pantry: sphinx-doc.org
 *
 * @domain `sphinx-doc.org`
 *
 * @install `launchpad install sphinx-doc.org`
 * @dependencies `python.org>=3.8<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sphinxdocorg
 * console.log(pkg.name)        // "sphinx-doc.org"
 * console.log(pkg.description) // "Package from pantry: sphinx-doc.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sphinx-doc-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sphinxdocorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'sphinx-doc.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sphinx-doc.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sphinx-doc.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sphinx-doc.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.8<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sphinx-doc.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SphinxdocorgPackage = typeof sphinxdocorgPackage
