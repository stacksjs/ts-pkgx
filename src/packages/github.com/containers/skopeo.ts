/**
 * **skopeo** - Work with remote images registries - retrieving information, images, signing content
 *
 * @domain `github.com/containers/skopeo`
 * @programs `skopeo`
 * @version `1.19.0` (15 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) skopeo`
 * @name `skopeo`
 * @aliases `containers/skopeo`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.skopeo
 * // Or access via domain
 * const samePkg = pantry.githubcomcontainersskopeo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "skopeo"
 * console.log(pkg.description) // "Work with remote images registries - retrieving..."
 * console.log(pkg.programs)    // ["skopeo"]
 * console.log(pkg.versions[0]) // "1.19.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/containers/skopeo.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const skopeoPackage = {
  /**
   * The display name of this package.
   */
  name: 'skopeo' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/containers/skopeo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Work with remote images registries - retrieving information, images, signing content' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/containers/skopeo/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) skopeo' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'skopeo',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.19.0',
    '1.18.0',
    '1.17.0',
    '1.16.1',
    '1.16.0',
    '1.15.2',
    '1.15.1',
    '1.15.0',
    '1.14.5',
    '1.14.4',
    '1.14.3',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'containers/skopeo',
  ] as const,
  fullPath: 'github.com/containers/skopeo' as const,
}

export type SkopeoPackage = typeof skopeoPackage
