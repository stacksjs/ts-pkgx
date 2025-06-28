/**
 * **langchain.com** - Package from pantry: langchain.com
 *
 * @domain `langchain.com`
 *
 * @install `launchpad install langchain.com`
 * @dependencies `python.org^3.12`, `docker.com/compose^2.23`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.langchaincom
 * console.log(pkg.name)        // "langchain.com"
 * console.log(pkg.description) // "Package from pantry: langchain.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/langchain-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const langchaincomPackage = {
  /**
   * The display name of this package.
   */
  name: 'langchain.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'langchain.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: langchain.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install langchain.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +langchain.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install langchain.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org^3.12',
    'docker.com/compose^2.23',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/langchain.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LangchaincomPackage = typeof langchaincomPackage
