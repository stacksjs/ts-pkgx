/**
 * **github.com/oobabooga/text-generation-webui** - pkgx package
 *
 * @domain `github.com/oobabooga/text/generation-webui`
 *
 * @install `pkgx github.com/oobabooga/text-generation-webui`
 * @aliases `github.com/oobabooga/text-generation-webui`, `oobabooga/text-generation-webui`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomoobaboogatextgenerationwebui
 * // Or access via domain
 * const samePkg = pantry.githubcomoobaboogatextgenerationwebui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oobabooga"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oobabooga/text/generation-webui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomoobaboogatextgenerationwebuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'oobabooga' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oobabooga/text/generation-webui' as const,
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
  installCommand: 'pkgx github.com/oobabooga/text-generation-webui' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/oobabooga/text-generation-webui',
    'oobabooga/text-generation-webui',
  ] as const,
  fullPath: 'github.com/oobabooga/text-generation-webui' as const,
}

export type GithubcomoobaboogatextgenerationwebuiPackage = typeof githubcomoobaboogatextgenerationwebuiPackage
