/**
 * **ollama** - Get up and running with Llama 3.3, DeepSeek-R1, Phi-4, Gemma 2, and other large language models.
 *
 * @domain `ollama.ai`
 * @programs `ollama`
 * @version `0.10.1` (105 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install ollama`
 * @name `ollama`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ollama
 * // Or access via domain
 * const samePkg = pantry.ollamaai
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ollama"
 * console.log(pkg.description) // "Get up and running with Llama 3.3, DeepSeek-R1,..."
 * console.log(pkg.programs)    // ["ollama"]
 * console.log(pkg.versions[0]) // "0.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ollama-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ollamaPackage = {
  /**
   * The display name of this package.
   */
  name: 'ollama' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ollama.ai' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Get up and running with Llama 3.3, DeepSeek-R1, Phi-4, Gemma 2, and other large language models.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ollama.ai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/ollama/ollama' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ollama' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ollama',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.1',
    '0.10.0',
    '0.9.6',
    '0.9.5',
    '0.9.4',
    '0.9.3',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.0',
    '0.7.1',
    '0.7.0',
    '0.6.8',
    '0.6.7',
    '0.6.6',
    '0.6.5',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.1',
    '0.6.0',
    '0.5.13',
    '0.5.12',
    '0.5.11',
    '0.5.10',
    '0.5.8',
    '0.5.7',
    '0.5.6',
    '0.5.5',
    '0.5.4',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.7',
    '0.4.6',
    '0.4.5',
    '0.4.4',
    '0.4.3',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.14',
    '0.3.13',
    '0.3.12',
    '0.3.11',
    '0.3.10',
    '0.3.9',
    '0.3.8',
    '0.3.7',
    '0.3.6',
    '0.3.5',
    '0.3.4',
    '0.3.3',
    '0.3.2',
    '0.3.1',
    '0.3.0',
    '0.2.8',
    '0.2.7',
    '0.2.6',
    '0.2.5',
    '0.2.4',
    '0.2.3',
    '0.2.2',
    '0.2.1',
    '0.2.0',
    '0.1.48',
    '0.1.47',
    '0.1.46',
    '0.1.45',
    '0.1.44',
    '0.1.43',
    '0.1.42',
    '0.1.41',
    '0.1.40',
    '0.1.39',
    '0.1.38',
    '0.1.37',
    '0.1.36',
    '0.1.35',
    '0.1.34',
    '0.1.33',
    '0.1.32',
    '0.1.31',
    '0.1.30',
    '0.1.29',
    '0.1.28',
    '0.1.27',
    '0.1.26',
    '0.1.25',
    '0.1.24',
    '0.1.23',
    '0.1.22',
    '0.1.21',
    '0.1.20',
    '0.1.19',
    '0.1.18',
    '0.1.17',
    '0.1.16',
    '0.1.0',
    '0.0.21',
    '0.0.20',
    '0.0.19',
    '0.0.18',
    '0.0.17',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) ollama -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ollama' as const,
}

export type OllamaPackage = typeof ollamaPackage
