/**
 * **github.com/99designs/aws-vault** - pkgx package
 *
 * @domain `github.com/99designs/aws/vault`
 *
 * @install `pkgx github.com/99designs/aws-vault`
 * @aliases `github.com/99designs/aws-vault`, `99designs/aws-vault`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcom99designsawsvault
 * // Or access via domain
 * const samePkg = pantry.githubcom99designsawsvault
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "99designs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/99designs/aws/vault.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcom99designsawsvaultPackage = {
  /**
   * The display name of this package.
   */
  name: '99designs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/99designs/aws/vault' as const,
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
  installCommand: 'pkgx github.com/99designs/aws-vault' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/99designs/aws-vault',
    '99designs/aws-vault',
  ] as const,
  fullPath: 'github.com/99designs/aws-vault' as const,
}

export type Githubcom99designsawsvaultPackage = typeof githubcom99designsawsvaultPackage
