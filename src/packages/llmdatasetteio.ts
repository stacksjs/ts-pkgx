/**
 * **llm.datasette.io** - Package from pantry: llm.datasette.io
 *
 * @domain `llm.datasette.io`
 *
 * @install `launchpad install llm.datasette.io`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.llmdatasetteio
 * console.log(pkg.name)        // "llm.datasette.io"
 * console.log(pkg.description) // "Package from pantry: llm.datasette.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/llm-datasette-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const llmdatasetteioPackage = {
  /**
   * The display name of this package.
   */
  name: 'llm.datasette.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'llm.datasette.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: llm.datasette.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install llm.datasette.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +llm.datasette.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install llm.datasette.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/llm.datasette.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LlmdatasetteioPackage = typeof llmdatasetteioPackage
