/**
 * **github.com/nomic-ai/gpt4all** - pkgx package
 *
 * @domain `github.com/nomic/ai/gpt4all`
 *
 * @install `pkgx github.com/nomic-ai/gpt4all`
 * @aliases `github.com/nomic-ai/gpt4all`, `nomic-ai/gpt4all`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomnomicaigpt4all
 * // Or access via domain
 * const samePkg = pantry.githubcomnomicaigpt4all
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nomic-ai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nomic/ai/gpt4all.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnomicaigpt4allPackage = {
  /**
   * The display name of this package.
   */
  name: 'nomic-ai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nomic/ai/gpt4all' as const,
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
  installCommand: 'pkgx github.com/nomic-ai/gpt4all' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/nomic-ai/gpt4all',
    'nomic-ai/gpt4all',
  ] as const,
  fullPath: 'github.com/nomic-ai/gpt4all' as const,
}

export type Githubcomnomicaigpt4allPackage = typeof githubcomnomicaigpt4allPackage
