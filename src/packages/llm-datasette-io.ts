/**
 * **llm** - Access large language models from the command-line
 *
 * @domain `llm.datasette.io`
 * @programs `llm`
 * @version `0.26.0` (30 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) llm`
 * @name `llm`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.llm
 * // Or access via domain
 * const samePkg = pantry.llmdatasetteio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "llm"
 * console.log(pkg.description) // "Access large language models from the command-line"
 * console.log(pkg.programs)    // ["llm"]
 * console.log(pkg.versions[0]) // "0.26.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/llm-datasette-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const llmPackage = {
  /**
   * The display name of this package.
   */
  name: 'llm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'llm.datasette.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Access large language models from the command-line' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/llm.datasette.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) llm' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'llm',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.26.0',
    '0.25.0',
    '0.24.2',
    '0.24.1',
    '0.24.0',
    '0.23.0',
    '0.22.0',
    '0.21.0',
    '0.20.0',
    '0.19.1',
    '0.19.0',
    '0.18.0',
    '0.17.1',
    '0.17.0',
    '0.16.0',
    '0.15.0',
    '0.14.0',
    '0.13.1',
    '0.13.0',
    '0.12.0',
    '0.11.2',
    '0.11.1',
    '0.11.0',
    '0.10.0',
    '0.9.0',
    '0.8.1',
    '0.8.0',
    '0.7.1',
    '0.7.0',
    '0.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'llm' as const,
}

export type LlmPackage = typeof llmPackage
