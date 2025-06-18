/**
 * **jupyter.org** - Package from pantry: jupyter.org
 *
 * @domain `jupyter.org`
 *
 * @install `launchpad install jupyter.org`
 * @dependencies `python.org>=3.7<3.12`, `gnu.org/which^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jupyterorg
 * console.log(pkg.name)        // "jupyter.org"
 * console.log(pkg.description) // "Package from pantry: jupyter.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jupyter-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jupyterorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'jupyter.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jupyter.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jupyter.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jupyter.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
    'gnu.org/which^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jupyter.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JupyterorgPackage = typeof jupyterorgPackage
