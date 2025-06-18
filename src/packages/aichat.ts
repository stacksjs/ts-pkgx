/**
 * **aichat** - All-in-one LLM CLI tool featuring Shell Assistant, Chat-REPL, RAG, AI Tools & Agents, with access to OpenAI, Claude, Gemini, Ollama, Groq, and more.
 *
 * @domain `crates.io/aichat`
 * @programs `aichat`
 * @version `0.29.0` (2 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/aichat.md
 *
 * @install `sh <(curl https://pkgx.sh) aichat`
 * @name `aichat`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.aichat
 * // Or access via domain
 * const samePkg = pantry.cratesioaichat
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "aichat"
 * console.log(pkg.description) // "All-in-one LLM CLI tool featuring Shell Assista..."
 * console.log(pkg.programs)    // ["aichat"]
 * console.log(pkg.versions[0]) // "0.29.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/aichat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aichatPackage = {
  /**
   * The display name of this package.
   */
  name: 'aichat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/aichat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'All-in-one LLM CLI tool featuring Shell Assistant, Chat-REPL, RAG, AI Tools & Agents, with access to OpenAI, Claude, Gemini, Ollama, Groq, and more.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/aichat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) aichat' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'aichat',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.29.0',
    '0.28.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/aichat' as const,
}

export type AichatPackage = typeof aichatPackage
