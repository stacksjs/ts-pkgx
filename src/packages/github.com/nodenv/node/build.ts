/**
 * **github.com/nodenv/node-build** - pkgx package
 *
 * @domain `github.com/nodenv/node/build`
 *
 * @install `pkgx github.com/nodenv/node-build`
 * @aliases `github.com/nodenv/node-build`, `nodenv/node-build`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomnodenvnodebuild
 * // Or access via domain
 * const samePkg = pantry.githubcomnodenvnodebuild
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nodenv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nodenv/node/build.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnodenvnodebuildPackage = {
  /**
   * The display name of this package.
   */
  name: 'nodenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nodenv/node/build' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/nodenv/node-build' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/nodenv/node-build',
    'nodenv/node-build',
  ] as const,
  fullPath: 'github.com/nodenv/node-build' as const,
}

export type GithubcomnodenvnodebuildPackage = typeof githubcomnodenvnodebuildPackage
