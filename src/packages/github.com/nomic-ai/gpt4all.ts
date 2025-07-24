/**
 * **gpt4all** - Locally run an Assistant-Tuned Chat-Style LLM
 *
 * @domain `github.com/nomic-ai/gpt4all`
 * @programs `gpt4all`
 * @version `2023.3.29` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gpt4all`
 * @name `gpt4all`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gpt4all
 * // Or access via domain
 * const samePkg = pantry.githubcomnomicaigpt4all
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gpt4all"
 * console.log(pkg.description) // "Locally run an Assistant-Tuned Chat-Style LLM"
 * console.log(pkg.programs)    // ["gpt4all"]
 * console.log(pkg.versions[0]) // "2023.3.29" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nomic-ai/gpt4all.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gpt4allPackage = {
  /**
   * The display name of this package.
   */
  name: 'gpt4all' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nomic-ai/gpt4all' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Locally run an Assistant-Tuned Chat-Style LLM' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nomic-ai/gpt4all/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gpt4all' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gpt4all',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.3.29',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) gpt4all -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gpt4all' as const,
}

export type Gpt4allPackage = typeof gpt4allPackage
