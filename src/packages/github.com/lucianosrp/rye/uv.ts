/**
 * **github.com/lucianosrp/rye-uv** - pkgx package
 *
 * @domain `github.com/lucianosrp/rye/uv`
 *
 * @install `pkgx github.com/lucianosrp/rye-uv`
 * @aliases `github.com/lucianosrp/rye-uv`, `lucianosrp/rye-uv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomlucianosrpryeuv
 * // Or access via domain
 * const samePkg = pantry.githubcomlucianosrpryeuv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lucianosrp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lucianosrp/rye/uv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomlucianosrpryeuvPackage = {
  /**
   * The display name of this package.
   */
  name: 'lucianosrp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lucianosrp/rye/uv' as const,
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
  installCommand: 'pkgx github.com/lucianosrp/rye-uv' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/lucianosrp/rye-uv',
    'lucianosrp/rye-uv',
  ] as const,
  fullPath: 'github.com/lucianosrp/rye-uv' as const,
}

export type GithubcomlucianosrpryeuvPackage = typeof githubcomlucianosrpryeuvPackage
