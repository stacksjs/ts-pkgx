/**
 * **comrak** - CommonMark + GFM compatible Markdown parser and renderer
 *
 * @domain `crates.io/comrak`
 * @programs `comrak`
 * @version `0.42.0` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install comrak`
 * @name `comrak`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.comrak
 * // Or access via domain
 * const samePkg = pantry.cratesiocomrak
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "comrak"
 * console.log(pkg.description) // "CommonMark + GFM compatible Markdown parser and..."
 * console.log(pkg.programs)    // ["comrak"]
 * console.log(pkg.versions[0]) // "0.42.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/comrak.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const comrakPackage = {
  /**
   * The display name of this package.
   */
  name: 'comrak' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/comrak' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CommonMark + GFM compatible Markdown parser and renderer' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/comrak/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install comrak' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'comrak',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.42.0',
    '0.41.1',
    '0.41.0',
    '0.40.0',
    '0.39.1',
    '0.39.0',
    '0.38.0',
    '0.37.0',
    '0.36.0',
    '0.35.0',
    '0.34.0',
    '0.33.0',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.0',
    '0.28.0',
    '0.27.0',
    '0.26.0',
    '0.25.0',
    '0.24.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) comrak -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install comrak' as const,
}

export type ComrakPackage = typeof comrakPackage
