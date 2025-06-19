/**
 * **tidy-viewer** - 📺(tv) Tidy Viewer is a cross-platform CLI csv pretty printer that uses column styling to maximize viewer enjoyment.
 *
 * @domain `crates.io/tidy-viewer`
 * @programs `tidy-viewer`
 * @version `1.5.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tidy-viewer`
 * @name `tidy-viewer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tidyviewer
 * // Or access via domain
 * const samePkg = pantry.cratesiotidyviewer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tidy-viewer"
 * console.log(pkg.description) // "📺(tv) Tidy Viewer is a cross-platform CLI csv ..."
 * console.log(pkg.programs)    // ["tidy-viewer"]
 * console.log(pkg.versions[0]) // "1.5.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tidy-viewer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tidyviewerPackage = {
  /**
   * The display name of this package.
   */
  name: 'tidy-viewer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tidy-viewer' as const,
  /**
   * Brief description of what this package does.
   */
  description: '📺(tv) Tidy Viewer is a cross-platform CLI csv pretty printer that uses column styling to maximize viewer enjoyment.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/tidy-viewer/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tidy-viewer' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tidy-viewer',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type TidyviewerPackage = typeof tidyviewerPackage
