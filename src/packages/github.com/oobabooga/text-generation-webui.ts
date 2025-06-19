/**
 * **text-generation-webui** - A Gradio web UI for Large Language Models with support for multiple inference backends.
 *
 * @domain `github.com/oobabooga/text-generation-webui`
 * @programs `text-generation-webui`
 * @version `3.5.0` (34 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install text-generation-webui`
 * @name `text-generation-webui`
 * @aliases `text generation web UI`
 * @dependencies `python.org~3.10`, `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.textgenerationwebui
 * // Or access via domain
 * const samePkg = pantry.githubcomoobaboogatextgenerationwebui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "text-generation-webui"
 * console.log(pkg.description) // "A Gradio web UI for Large Language Models with ..."
 * console.log(pkg.programs)    // ["text-generation-webui"]
 * console.log(pkg.versions[0]) // "3.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oobabooga/text-generation-webui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const textgenerationwebuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'text-generation-webui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oobabooga/text-generation-webui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A Gradio web UI for Large Language Models with support for multiple inference backends.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oobabooga/text-generation-webui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install text-generation-webui' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'text-generation-webui',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.10',
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.0',
    '3.4.1',
    '3.4.0',
    '3.3.2',
    '3.3.1',
    '3.3.0',
    '3.2.0',
    '3.1.0',
    '3.0.0',
    '2.8.1',
    '2.8.0',
    '2.7.0',
    '2.6.0',
    '2.5.0',
    '2.4.0',
    '2.3.0',
    '2.2.0',
    '2.1.0',
    '2.0.0',
    '1.16.0',
    '1.15.0',
    '1.14.0',
    '1.13.0',
    '1.12.0',
    '1.11.0',
    '1.10.1',
    '1.10.0',
    '1.9.1',
    '1.9.0',
    '1.8.0',
    '1.7.0',
    '1.6.1',
    '1.6.0',
    '1.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'text generation web UI',
  ] as const,
}

export type TextgenerationwebuiPackage = typeof textgenerationwebuiPackage
