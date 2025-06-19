/**
 * **convco** - Conventional commits, changelog, versioning, validation
 *
 * @domain `convco.github.io`
 * @programs `convco`
 * @version `0.6.2` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install convco`
 * @aliases `convco`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.convco
 * // Or access via domain
 * const samePkg = pantry.convcogithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "convco.github.io"
 * console.log(pkg.description) // "Conventional commits, changelog, versioning, va..."
 * console.log(pkg.programs)    // ["convco"]
 * console.log(pkg.versions[0]) // "0.6.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/convco-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const convcoPackage = {
  /**
   * The display name of this package.
   */
  name: 'convco.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'convco.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Conventional commits, changelog, versioning, validation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/convco.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install convco' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'convco',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.3',
    '0.4.2',
    '0.4.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'convco',
  ] as const,
}

export type ConvcoPackage = typeof convcoPackage
