/**
 * **ollama.ai** - Package from pantry: ollama.ai
 *
 * @domain `ollama.ai`
 *
 * @install `launchpad install ollama.ai`
 * @dependencies `curl.se/ca-certs`, `go.dev^1.21`, `cmake.org^3`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ollamaai
 * console.log(pkg.name)        // "ollama.ai"
 * console.log(pkg.description) // "Package from pantry: ollama.ai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ollama-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ollamaaiPackage = {
  /**
   * The display name of this package.
   */
  name: 'ollama.ai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ollama.ai' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ollama.ai' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ollama.ai' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
    'go.dev^1.21',
    'cmake.org^3',
    'git-scm.org^2',
    'gnu.org/binutils',
    'gitlab.com/procps-ng/procps',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ollama.ai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OllamaaiPackage = typeof ollamaaiPackage
