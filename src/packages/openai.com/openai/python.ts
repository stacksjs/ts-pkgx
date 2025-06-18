/**
 * **openai.com/openai-python** - pkgx package
 *
 * @domain `openai.com/openai/python`
 *
 * @install `pkgx openai.com/openai-python`
 * @name `openai-python`
 * @aliases `openai.com/openai-python`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.openaicomopenaipython
 * // Or access via domain
 * const samePkg = pantry.openaicomopenaipython
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openai-python"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openai-com/openai/python.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openaicomopenaipythonPackage = {
  /**
   * The display name of this package.
   */
  name: 'openai-python' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openai.com/openai/python' as const,
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
  installCommand: 'pkgx openai.com/openai-python' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'openai.com/openai-python',
  ] as const,
  fullPath: 'openai.com/openai-python' as const,
}

export type OpenaicomopenaipythonPackage = typeof openaicomopenaipythonPackage
