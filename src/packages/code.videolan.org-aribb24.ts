/**
 * **aribb24** - pkgx package
 *
 * @domain `code.videolan.org/aribb24`
 * @version `1.0.4` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org/aribb24.md
 *
 * @install `sh <(curl https://pkgx.sh) +code.videolan.org/aribb24 -- $SHELL -i`
 * @aliases `aribb24`
 * @dependencies `libpng.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.aribb24
 * // Or access via domain
 * const samePkg = pantry.codevideolanorgaribb24
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "code.videolan.org/aribb24"
 * console.log(pkg.versions[0]) // "1.0.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/code-videolan-org/aribb24.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aribb24Package = {
  /**
   * The display name of this package.
   */
  name: 'code.videolan.org/aribb24' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'code.videolan.org/aribb24' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/code.videolan.org/aribb24/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +code.videolan.org/aribb24 -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'aribb24',
  ] as const,
  fullPath: 'code.videolan.org/aribb24' as const,
}

export type Aribb24Package = typeof aribb24Package
