/**
 * **vals** - Helm-like configuration values loader with support for various sources
 *
 * @domain `github.com/helmfile/vals`
 * @programs `vals`
 * @version `0.41.2` (32 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install vals`
 * @name `vals`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.vals
 * // Or access via domain
 * const samePkg = pantry.githubcomhelmfilevals
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "vals"
 * console.log(pkg.description) // "Helm-like configuration values loader with supp..."
 * console.log(pkg.programs)    // ["vals"]
 * console.log(pkg.versions[0]) // "0.41.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/helmfile/vals.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const valsPackage = {
  /**
   * The display name of this package.
   */
  name: 'vals' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/helmfile/vals' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Helm-like configuration values loader with support for various sources' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/helmfile/vals/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install vals' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'vals',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.41.2',
    '0.41.1',
    '0.41.0',
    '0.40.1',
    '0.40.0',
    '0.39.4',
    '0.39.3',
    '0.39.2',
    '0.39.1',
    '0.39.0',
    '0.38.0',
    '0.37.8',
    '0.37.7',
    '0.37.6',
    '0.37.5',
    '0.37.4',
    '0.37.3',
    '0.37.2',
    '0.37.1',
    '0.37.0',
    '0.36.0',
    '0.35.0',
    '0.34.1',
    '0.34.0',
    '0.33.1',
    '0.33.0',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.0',
    '0.28.1',
    '0.28.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ValsPackage = typeof valsPackage
