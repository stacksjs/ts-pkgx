/**
 * **commit** - Command-line tool to guide your template commit messages anywhere, anytime
 *
 * @domain `github.com/alt-art/commit`
 * @programs `commit`
 * @version `0.7.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) commit`
 * @name `commit`
 * @aliases `alt-art/commit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.commit
 * // Or access via domain
 * const samePkg = pantry.githubcomaltartcommit
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "commit"
 * console.log(pkg.description) // "Command-line tool to guide your template commit..."
 * console.log(pkg.programs)    // ["commit"]
 * console.log(pkg.versions[0]) // "0.7.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/alt-art/commit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const commitPackage = {
  /**
   * The display name of this package.
   */
  name: 'commit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/alt-art/commit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Command-line tool to guide your template commit messages anywhere, anytime' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/alt-art/commit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) commit' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'commit',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.7.0',
    '0.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'alt-art/commit',
  ] as const,
  fullPath: 'github.com/alt-art/commit' as const,
}

export type CommitPackage = typeof commitPackage
