/**
 * **codex** - pkgx package
 *
 * @domain `openai.com/codex`
 * @version `0.49.0` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install openai.com/codex`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openaicomcodex
 * console.log(pkg.name)        // "codex"
 * console.log(pkg.versions[0]) // "0.49.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openai-com/codex.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openaicomcodexPackage = {
  /**
   * The display name of this package.
   */
  name: 'codex' as const,
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
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openai.com/codex' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openai.com/codex -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openai.com/codex' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Runtime dependencies for this package.
   * These are required when running the package.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  buildDependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.49.0',
    '0.48.0',
    '0.47.0',
    '0.46.0',
    '0.45.0',
    '0.44.0',
    '0.42.0',
    '0.41.0',
    '0.40.0',
    '0.39.0',
    '0.38.0',
    '0.37.0',
    '0.36.0',
  ] as const,
  aliases: [] as const,
}

export type OpenaicomcodexPackage = typeof openaicomcodexPackage
