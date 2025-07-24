/**
 * **gpt4all** - Package from pantry: github.com/nomic-ai/gpt4all
 *
 * @domain `github.com/nomic-ai/gpt4all`
 *
 * @install `launchpad install github.com/nomic-ai/gpt4all`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnomicaigpt4all
 * console.log(pkg.name)        // "gpt4all"
 * console.log(pkg.description) // "Package from pantry: github.com/nomic-ai/gpt4all"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nomic-ai/gpt4all.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnomicaigpt4allPackage = {
  /**
   * The display name of this package.
   */
  name: 'gpt4all' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nomic-ai/gpt4all' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/nomic-ai/gpt4all' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/nomic-ai/gpt4all' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/nomic-ai/gpt4all -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/nomic-ai/gpt4all' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nomic-ai/gpt4all/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomnomicaigpt4allPackage = typeof githubcomnomicaigpt4allPackage
