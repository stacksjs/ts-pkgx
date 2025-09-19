/**
 * **openai.com/codex** - pkgx package
 *
 * @domain `openai.com/codex`
 * @version `0.39.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install openai.com/codex`
 * @dependencies `openssl.org^1.1`
 * @companions `crates.io/ripgrep`, `git-scm.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openaicomcodex
 * console.log(pkg.name)        // "openai.com/codex"
 * console.log(pkg.versions[0]) // "0.39.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openai-com/codex.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openaicomcodexPackage = {
  /**
   * The display name of this package.
   */
  name: 'openai.com/codex' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openai.com/codex' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openai.com/codex/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openai.com/codex' as const,
  programs: [] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'crates.io/ripgrep',
    'git-scm.org',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.39.0',
    '0.38.0',
    '0.37.0',
    '0.36.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openai.com/codex -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openai.com/codex' as const,
}

export type OpenaicomcodexPackage = typeof openaicomcodexPackage
