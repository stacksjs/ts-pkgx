/**
 * **openai-python** - Package from pantry: openai.com/openai-python
 *
 * @domain `openai.com/openai-python`
 *
 * @install `launchpad install openai.com/openai-python`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openaicomopenaipython
 * console.log(pkg.name)        // "openai-python"
 * console.log(pkg.description) // "Package from pantry: openai.com/openai-python"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openai-com/openai-python.md
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
  domain: 'openai.com/openai-python' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openai.com/openai-python' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openai.com/openai-python' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openai.com/openai-python -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openai.com/openai-python' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openai.com/openai-python/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenaicomopenaipythonPackage = typeof openaicomopenaipythonPackage
