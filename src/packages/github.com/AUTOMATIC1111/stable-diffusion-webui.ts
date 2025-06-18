/**
 * **stable-diffusion-webui** - Stable Diffusion web UI
 *
 * @domain `github.com/AUTOMATIC1111/stable-diffusion-webui`
 * @programs `stable-diffusion-webui`
 * @version `1.10.1` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install stable-diffusion-webui`
 * @name `stable-diffusion-webui`
 * @aliases `Stable Diffusion web UI`
 * @dependencies `python.org~3.10`, `tea.xyz^0  # our scripts use tea/cli`, `git-scm.org^2`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.stablediffusionwebui
 * // Or access via domain
 * const samePkg = pantry.githubcomautomatic1111stablediffusionwebui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "stable-diffusion-webui"
 * console.log(pkg.description) // "Stable Diffusion web UI"
 * console.log(pkg.programs)    // ["stable-diffusion-webui"]
 * console.log(pkg.versions[0]) // "1.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AUTOMATIC1111/stable-diffusion-webui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const stablediffusionwebuiPackage = {
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
  description: 'Stable Diffusion web UI' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AUTOMATIC1111/stable-diffusion-webui/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install stable-diffusion-webui' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'stable-diffusion-webui',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.10',
    'tea.xyz^0  # our scripts use tea/cli',
    'git-scm.org^2',
    'google.com/webp',
    'pip.pypa.io',
    'gnu.org/wget',
    'protobuf.dev>=21',
    'rust-lang.org^1  # docs say this is needed but I’m not convinced…',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.10.1',
    '1.10.0',
    '1.9.4',
    '1.9.3',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.0',
    '1.7.0',
    '1.6.0',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.0',
    '1.3.2',
    '1.3.1',
    '1.3.0',
    '1.2.1',
    '1.2.0',
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'Stable Diffusion web UI',
  ] as const,
}

export type StablediffusionwebuiPackage = typeof stablediffusionwebuiPackage
