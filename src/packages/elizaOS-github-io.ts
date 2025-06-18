/**
 * **eliza** - Autonomous agents for everyone
 *
 * @domain `elizaOS.github.io`
 * @programs `eliza`
 * @version `1.0.9` (11 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) eliza`
 * @name `elizaOS`
 * @aliases `eliza`, `elizaos`
 * @dependencies `python.org>=2.7`, `nodejs.org~23.3`, `pnpm.io`, ... (+1 more)
 * @companions `git-scm.org`, `ffmpeg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.eliza
 * // Or access via domain
 * const samePkg = pantry.elizaosgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "elizaOS"
 * console.log(pkg.description) // "Autonomous agents for everyone"
 * console.log(pkg.programs)    // ["eliza"]
 * console.log(pkg.versions[0]) // "1.0.9" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elizaOS-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elizaPackage = {
  /**
   * The display name of this package.
   */
  name: 'elizaOS' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elizaOS.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Autonomous agents for everyone' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elizaOS.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) eliza' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'eliza',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'git-scm.org',
    'ffmpeg.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=2.7',
    'nodejs.org~23.3',
    'pnpm.io',
    'bun.sh^1.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.9',
    '1.0.8',
    '1.0.7',
    '1.0.6',
    '1.0.5',
    '0.25.19',
    '0.25.9',
    '0.25.8',
    '0.1.9',
    '0.1.8.1',
    '0.1.7',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'eliza',
    'elizaos',
  ] as const,
  fullPath: 'elizaOS.github.io' as const,
}

export type ElizaPackage = typeof elizaPackage
