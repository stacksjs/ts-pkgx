/**
 * **jfrog.com/jfrog-cli** - pkgx package
 *
 * @domain `jfrog.com/jfrog/cli`
 *
 * @install `pkgx jfrog.com/jfrog-cli`
 * @name `jfrog-cli`
 * @aliases `jfrog.com/jfrog-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jfrogcomjfrogcli
 * // Or access via domain
 * const samePkg = pantry.jfrogcomjfrogcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jfrog-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jfrog-com/jfrog/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jfrogcomjfrogcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'jfrog-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jfrog.com/jfrog/cli' as const,
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
  installCommand: 'pkgx jfrog.com/jfrog-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jfrog.com/jfrog-cli',
  ] as const,
  fullPath: 'jfrog.com/jfrog-cli' as const,
}

export type JfrogcomjfrogcliPackage = typeof jfrogcomjfrogcliPackage
