/**
 * **imageflow_tool** - Package from pantry: imageflow.io/imageflow_tool
 *
 * @domain `imageflow.io/imageflow_tool`
 *
 * @install `launchpad install imageflow.io/imageflow_tool`
 * @dependencies `openssl.org@1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.imageflowioimageflow_tool
 * console.log(pkg.name)        // "imageflow_tool"
 * console.log(pkg.description) // "Package from pantry: imageflow.io/imageflow_tool"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/imageflow-io/imageflow_tool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const imageflowioimageflow_toolPackage = {
  /**
   * The display name of this package.
   */
  name: 'imageflow_tool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'imageflow.io/imageflow_tool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: imageflow.io/imageflow_tool' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install imageflow.io/imageflow_tool' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +imageflow.io/imageflow_tool -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install imageflow.io/imageflow_tool' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org@1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/imageflow.io/imageflow_tool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Imageflowioimageflow_toolPackage = typeof imageflowioimageflow_toolPackage
