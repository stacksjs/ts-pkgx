/**
 * **stable-diffusion-webui** - Package from pantry: github.com/AUTOMATIC1111/stable-diffusion-webui
 *
 * @domain `github.com/AUTOMATIC1111/stable-diffusion-webui`
 *
 * @install `launchpad install github.com/AUTOMATIC1111/stable-diffusion-webui`
 * @dependencies `python.org~3.10`, `tea.xyz^0  # our scripts use tea/cli`, `git-scm.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomautomatic1111stablediffusionwebui
 * console.log(pkg.name)        // "stable-diffusion-webui"
 * console.log(pkg.description) // "Package from pantry: github.com/AUTOMATIC1111/s..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AUTOMATIC1111/stable-diffusion-webui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomautomatic1111stablediffusionwebuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'stable-diffusion-webui' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AUTOMATIC1111/stable-diffusion-webui' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/AUTOMATIC1111/stable-diffusion-webui' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/AUTOMATIC1111/stable-diffusion-webui' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/AUTOMATIC1111/stable-diffusion-webui -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/AUTOMATIC1111/stable-diffusion-webui' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.10',
    'tea.xyz^0  # our scripts use tea/cli',
    'git-scm.org^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AUTOMATIC1111/stable-diffusion-webui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomautomatic1111stablediffusionwebuiPackage = typeof githubcomautomatic1111stablediffusionwebuiPackage
