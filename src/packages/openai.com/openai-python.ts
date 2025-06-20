/**
 * **openai** - The official Python library for the OpenAI API
 *
 * @domain `openai.com/openai-python`
 * @programs `openai`
 * @version `1.89.0` (236 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install openai`
 * @aliases `openai`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.openai
 * // Or access via domain
 * const samePkg = pantry.openaicomopenaipython
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "openai-python"
 * console.log(pkg.description) // "The official Python library for the OpenAI API"
 * console.log(pkg.programs)    // ["openai"]
 * console.log(pkg.versions[0]) // "1.89.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openai-com/openai-python.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openaiPackage = {
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
  description: 'The official Python library for the OpenAI API' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openai.com/openai-python/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openai' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'openai',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.89.0',
    '1.88.0',
    '1.87.0',
    '1.86.0',
    '1.85.0',
    '1.84.0',
    '1.83.0',
    '1.82.1',
    '1.82.0',
    '1.81.0',
    '1.80.0',
    '1.79.0',
    '1.78.1',
    '1.78.0',
    '1.77.0',
    '1.76.2',
    '1.76.1',
    '1.76.0',
    '1.75.0',
    '1.74.1',
    '1.74.0',
    '1.73.0',
    '1.72.0',
    '1.71.0',
    '1.70.0',
    '1.69.0',
    '1.68.2',
    '1.68.1',
    '1.68.0',
    '1.67.0',
    '1.66.5',
    '1.66.4',
    '1.66.3',
    '1.66.2',
    '1.66.1',
    '1.66.0',
    '1.65.5',
    '1.65.4',
    '1.65.3',
    '1.65.2',
    '1.65.1',
    '1.65.0',
    '1.64.0',
    '1.63.2',
    '1.63.1',
    '1.63.0',
    '1.62.0',
    '1.61.1',
    '1.61.0',
    '1.60.2',
    '1.60.1',
    '1.60.0',
    '1.59.9',
    '1.59.8',
    '1.59.7',
    '1.59.6',
    '1.59.5',
    '1.59.4',
    '1.59.3',
    '1.59.2',
    '1.59.1',
    '1.59.0',
    '1.58.1',
    '1.58.0',
    '1.57.4',
    '1.57.3',
    '1.57.2',
    '1.57.1',
    '1.57.0',
    '1.56.2',
    '1.56.1',
    '1.56.0',
    '1.55.3',
    '1.55.2',
    '1.55.1',
    '1.55.0',
    '1.54.5',
    '1.54.4',
    '1.54.3',
    '1.54.2',
    '1.54.1',
    '1.54.0',
    '1.53.1',
    '1.53.0',
    '1.52.2',
    '1.52.1',
    '1.52.0',
    '1.51.2',
    '1.51.1',
    '1.51.0',
    '1.50.2',
    '1.50.1',
    '1.50.0',
    '1.49.0',
    '1.48.0',
    '1.47.1',
    '1.47.0',
    '1.46.1',
    '1.46.0',
    '1.45.1',
    '1.45.0',
    '1.44.1',
    '1.44.0',
    '1.43.1',
    '1.43.0',
    '1.42.0',
    '1.41.1',
    '1.41.0',
    '1.40.8',
    '1.40.7',
    '1.40.6',
    '1.40.5',
    '1.40.4',
    '1.40.3',
    '1.40.2',
    '1.40.1',
    '1.40.0',
    '1.39.0',
    '1.38.0',
    '1.37.2',
    '1.37.1',
    '1.37.0',
    '1.36.1',
    '1.36.0',
    '1.35.15',
    '1.35.14',
    '1.35.13',
    '1.35.12',
    '1.35.11',
    '1.35.10',
    '1.35.9',
    '1.35.8',
    '1.35.7',
    '1.35.6',
    '1.35.5',
    '1.35.4',
    '1.35.3',
    '1.35.2',
    '1.35.1',
    '1.35.0',
    '1.34.0',
    '1.33.0',
    '1.32.1',
    '1.32.0',
    '1.31.2',
    '1.31.1',
    '1.31.0',
    '1.30.5',
    '1.30.4',
    '1.30.3',
    '1.30.2',
    '1.30.1',
    '1.30.0',
    '1.29.0',
    '1.28.2',
    '1.28.1',
    '1.28.0',
    '1.27.0',
    '1.26.0',
    '1.25.2',
    '1.25.1',
    '1.25.0',
    '1.24.1',
    '1.24.0',
    '1.23.6',
    '1.23.5',
    '1.23.4',
    '1.23.3',
    '1.23.2',
    '1.23.1',
    '1.23.0',
    '1.22.0',
    '1.21.2',
    '1.21.1',
    '1.21.0',
    '1.20.0',
    '1.19.0',
    '1.18.0',
    '1.17.1',
    '1.17.0',
    '1.16.2',
    '1.16.1',
    '1.16.0',
    '1.15.0',
    '1.14.3',
    '1.14.2',
    '1.14.1',
    '1.14.0',
    '1.13.4',
    '1.13.3',
    '1.13.2',
    '1.13.1',
    '1.13.0',
    '1.12.0',
    '1.11.1',
    '1.11.0',
    '1.10.0',
    '1.9.0',
    '1.8.0',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.1',
    '1.6.0',
    '1.5.0',
    '1.4.0',
    '1.3.9',
    '1.3.8',
    '1.3.7',
    '1.3.6',
    '1.3.5',
    '1.3.4',
    '1.3.3',
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.4',
    '1.2.3',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.2',
    '1.1.0',
    '1.0.1',
    '1.0.0',
    '0.28.1',
    '0.28.0',
    '0.27.10',
    '0.27.9',
    '0.27.8',
    '0.27.7',
    '0.27.6',
    '0.27.5',
    '0.27.4',
    '0.27.3',
    '0.27.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'openai',
  ] as const,
}

export type OpenaiPackage = typeof openaiPackage
