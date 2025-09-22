/**
 * **imageflow_tool** - High-performance image manipulation for web servers. Includes imageflow_server, imageflow_tool, and libimageflow
 *
 * @domain `imageflow.io/imageflow_tool`
 * @programs `imageflow_tool`
 * @version `2023.9.25` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install imageflow_tool`
 * @name `imageflow_tool`
 * @dependencies `openssl.org@1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.imageflowtool
 * // Or access via domain
 * const samePkg = pantry.imageflowioimageflow_tool
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "imageflow_tool"
 * console.log(pkg.description) // "High-performance image manipulation for web ser..."
 * console.log(pkg.programs)    // ["imageflow_tool"]
 * console.log(pkg.versions[0]) // "2023.9.25" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/imageflow-io/imageflow_tool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const imageflowtoolPackage = {
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
  description: 'High-performance image manipulation for web servers. Includes imageflow_server, imageflow_tool, and libimageflow' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/imageflow.io/imageflow_tool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/imazen/imageflow' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install imageflow_tool' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'imageflow_tool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org@1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.9.25',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) imageflow_tool -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install imageflow_tool' as const,
}

export type ImageflowtoolPackage = typeof imageflowtoolPackage
