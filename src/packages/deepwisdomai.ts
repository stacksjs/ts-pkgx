/**
 * **deepwisdom.ai** - Package from pantry: deepwisdom.ai
 *
 * @domain `deepwisdom.ai`
 *
 * @install `launchpad install deepwisdom.ai`
 * @dependencies `pkgx.sh^1`, `git-scm.org^2 # v0.7.0 requires it`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.deepwisdomai
 * console.log(pkg.name)        // "deepwisdom.ai"
 * console.log(pkg.description) // "Package from pantry: deepwisdom.ai"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/deepwisdom-ai.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const deepwisdomaiPackage = {
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
  description: 'Package from pantry: deepwisdom.ai' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install deepwisdom.ai' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +deepwisdom.ai -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install deepwisdom.ai' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'git-scm.org^2 # v0.7.0 requires it',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/deepwisdom.ai/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DeepwisdomaiPackage = typeof deepwisdomaiPackage
