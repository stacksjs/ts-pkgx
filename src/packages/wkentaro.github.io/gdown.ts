/**
 * **gdown** - Package from pantry: wkentaro.github.io/gdown
 *
 * @domain `wkentaro.github.io/gdown`
 *
 * @install `launchpad install wkentaro.github.io/gdown`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wkentarogithubiogdown
 * console.log(pkg.name)        // "gdown"
 * console.log(pkg.description) // "Package from pantry: wkentaro.github.io/gdown"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wkentaro-github-io/gdown.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wkentarogithubiogdownPackage = {
  /**
   * The display name of this package.
   */
  name: 'gdown' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wkentaro.github.io/gdown' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wkentaro.github.io/gdown' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install wkentaro.github.io/gdown' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wkentaro.github.io/gdown/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WkentarogithubiogdownPackage = typeof wkentarogithubiogdownPackage
