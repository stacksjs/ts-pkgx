/**
 * **text-generation-webui** - Package from pantry: github.com/oobabooga/text-generation-webui
 *
 * @domain `github.com/oobabooga/text-generation-webui`
 *
 * @install `launchpad install github.com/oobabooga/text-generation-webui`
 * @dependencies `python.org~3.10`, `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomoobaboogatextgenerationwebui
 * console.log(pkg.name)        // "text-generation-webui"
 * console.log(pkg.description) // "Package from pantry: github.com/oobabooga/text-..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/oobabooga/text-generation-webui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomoobaboogatextgenerationwebuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'text-generation-webui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/oobabooga/text-generation-webui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/oobabooga/text-generation-webui' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/oobabooga/text-generation-webui' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/oobabooga/text-generation-webui -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/oobabooga/text-generation-webui' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.10',
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/oobabooga/text-generation-webui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomoobaboogatextgenerationwebuiPackage = typeof githubcomoobaboogatextgenerationwebuiPackage
