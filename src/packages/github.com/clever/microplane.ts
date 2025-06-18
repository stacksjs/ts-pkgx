/**
 * **mp** - A CLI tool to make git changes across many repos, especially useful with Microservices.
 *
 * @domain `github.com/clever/microplane`
 * @programs `mp`
 * @version `0.0.36` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) mp`
 * @name `mp`
 * @aliases `clever/microplane`
 * @dependencies `git-scm.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mp
 * // Or access via domain
 * const samePkg = pantry.githubcomclevermicroplane
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mp"
 * console.log(pkg.description) // "A CLI tool to make git changes across many repo..."
 * console.log(pkg.programs)    // ["mp"]
 * console.log(pkg.versions[0]) // "0.0.36" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/clever/microplane.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpPackage = {
  /**
   * The display name of this package.
   */
  name: 'mp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/clever/microplane' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A CLI tool to make git changes across many repos, especially useful with Microservices.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/clever/microplane/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mp',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.0.36',
    '0.0.35',
    '0.0.34',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'clever/microplane',
  ] as const,
  fullPath: 'github.com/clever/microplane' as const,
}

export type MpPackage = typeof mpPackage
