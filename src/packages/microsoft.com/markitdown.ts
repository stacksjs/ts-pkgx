/**
 * **markitdown** - Python tool for converting files and office documents to Markdown.
 *
 * @domain `microsoft.com/markitdown`
 * @programs `markitdown`
 * @version `0.0.1.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install markitdown`
 * @name `markitdown`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.markitdown
 * // Or access via domain
 * const samePkg = pantry.microsoftcommarkitdown
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "markitdown"
 * console.log(pkg.description) // "Python tool for converting files and office doc..."
 * console.log(pkg.programs)    // ["markitdown"]
 * console.log(pkg.versions[0]) // "0.0.1.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/markitdown.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const markitdownPackage = {
  /**
   * The display name of this package.
   */
  name: 'markitdown' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/markitdown' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Python tool for converting files and office documents to Markdown.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/markitdown/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install markitdown' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'markitdown',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.1.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type MarkitdownPackage = typeof markitdownPackage
