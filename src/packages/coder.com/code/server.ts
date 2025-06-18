/**
 * **coder.com/code-server** - pkgx package
 *
 * @domain `coder.com/code/server`
 *
 * @install `pkgx coder.com/code-server`
 * @name `code-server`
 * @aliases `coder.com/code-server`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.codercomcodeserver
 * // Or access via domain
 * const samePkg = pantry.codercomcodeserver
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "code-server"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/coder-com/code/server.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const codercomcodeserverPackage = {
  /**
   * The display name of this package.
   */
  name: 'code-server' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'coder.com/code/server' as const,
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
  installCommand: 'pkgx coder.com/code-server' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'coder.com/code-server',
  ] as const,
  fullPath: 'coder.com/code-server' as const,
}

export type CodercomcodeserverPackage = typeof codercomcodeserverPackage
