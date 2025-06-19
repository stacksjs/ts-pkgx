/**
 * **metagpt** - 🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming
 *
 * @domain `deepwisdom.ai`
 * @programs `metagpt`
 * @version `0.8.2` (16 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install metagpt`
 * @aliases `metagpt`, `MetaGPT`
 * @dependencies `pkgx.sh^1`, `git-scm.org^2 # v0.7.0 requires it`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.metagpt
 * // Or access via domain
 * const samePkg = pantry.deepwisdomai
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "deepwisdom.ai"
 * console.log(pkg.description) // "🌟 The Multi-Agent Framework: First AI Software..."
 * console.log(pkg.programs)    // ["metagpt"]
 * console.log(pkg.versions[0]) // "0.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/deepwisdom-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const metagptPackage = {
  /**
   * The display name of this package.
   */
  name: 'deepwisdom.ai' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'deepwisdom.ai' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🌟 The Multi-Agent Framework: First AI Software Company, Towards Natural Language Programming' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/deepwisdom.ai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install metagpt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'metagpt',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'git-scm.org^2 # v0.7.0 requires it',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.7',
    '0.7.6',
    '0.7.4',
    '0.7.3',
    '0.7.2',
    '0.7.1',
    '0.7.0',
    '0.6.6',
    '0.6.4',
    '0.6.3',
    '0.6.2',
    '0.6.0',
    '0.5.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'metagpt',
    'MetaGPT',
  ] as const,
}

export type MetagptPackage = typeof metagptPackage
