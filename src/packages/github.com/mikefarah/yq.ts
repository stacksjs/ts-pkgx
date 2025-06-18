/**
 * **yq** - yq is a portable command-line YAML, JSON, XML, CSV, TOML  and properties processor
 *
 * @domain `github.com/mikefarah/yq`
 * @programs `yq`
 * @version `4.45.4` (33 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) yq`
 * @name `yq`
 * @aliases `mikefarah/yq`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yq
 * // Or access via domain
 * const samePkg = pantry.githubcommikefarahyq
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yq"
 * console.log(pkg.description) // "yq is a portable command-line YAML, JSON, XML, ..."
 * console.log(pkg.programs)    // ["yq"]
 * console.log(pkg.versions[0]) // "4.45.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mikefarah/yq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yqPackage = {
  /**
   * The display name of this package.
   */
  name: 'yq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mikefarah/yq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'yq is a portable command-line YAML, JSON, XML, CSV, TOML  and properties processor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mikefarah/yq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) yq' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yq',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.45.4',
    '4.45.3',
    '4.45.2',
    '4.45.1',
    '4.44.6',
    '4.44.5',
    '4.44.3',
    '4.44.2',
    '4.44.1',
    '4.43.1',
    '4.42.1',
    '4.41.1',
    '4.40.7',
    '4.40.5',
    '4.40.4',
    '4.40.3',
    '4.40.2',
    '4.40.1',
    '4.35.2',
    '4.35.1',
    '4.34.2',
    '4.34.1',
    '4.33.3',
    '4.33.2',
    '4.33.1',
    '4.32.2',
    '4.32.1',
    '4.31.2',
    '4.31.1',
    '4.30.8',
    '4.30.7',
    '4.30.6',
    '4.30.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mikefarah/yq',
  ] as const,
  fullPath: 'github.com/mikefarah/yq' as const,
}

export type YqPackage = typeof yqPackage
