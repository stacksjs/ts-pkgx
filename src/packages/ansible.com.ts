/**
 * **+ansible.com -- $SHELL -i** - Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy and maintain. Automate everything from code deployment to network configuration to cloud management, in a language that approaches plain English, using SSH, with no agents to install on remote systems. https://docs.ansible.com.
 *
 * @domain `ansible.com`
 * @programs `ansible`, `ansible-config`, `ansible-connection`, `ansible-console`, `ansible-doc`, ... (+6 more)
 * @version `2.18.6` (69 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/ansible-com.md
 *
 * @install `sh <(curl https://pkgx.sh) +ansible.com -- $SHELL -i`
 * @aliases `+ansible.com -- $SHELL -i`, `ansible`
 * @dependencies `pkgx.sh@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.ansiblecomSHELLi
 * // Or access via domain
 * const samePkg = pantry.ansiblecom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "ansible"
 * console.log(pkg.description) // "Ansible is a radically simple IT automation pla..."
 * console.log(pkg.programs)    // ["ansible", "ansible-config", ...]
 * console.log(pkg.versions[0]) // "2.18.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ansible-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ansiblecomSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'ansible' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ansible.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Ansible is a radically simple IT automation platform that makes your applications and systems easier to deploy and maintain. Automate everything from code deployment to network configuration to cloud management, in a language that approaches plain English, using SSH, with no agents to install on remote systems. https://docs.ansible.com.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ansible.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +ansible.com -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ansible',
    'ansible-config',
    'ansible-connection',
    'ansible-console',
    'ansible-doc',
    'ansible-galaxy',
    'ansible-inventory',
    'ansible-playbook',
    'ansible-pull',
    'ansible-test',
    'ansible-vault',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.18.6',
    '2.18.5',
    '2.18.4',
    '2.18.3',
    '2.18.2',
    '2.18.1',
    '2.18.0',
    '2.17.12',
    '2.17.11',
    '2.17.10',
    '2.17.9',
    '2.17.7',
    '2.17.6',
    '2.17.5',
    '2.17.4',
    '2.17.3',
    '2.17.2',
    '2.17.1',
    '2.17.0',
    '2.16.14',
    '2.16.13',
    '2.16.12',
    '2.16.11',
    '2.16.10',
    '2.16.9',
    '2.16.8',
    '2.16.7',
    '2.16.6',
    '2.16.5',
    '2.16.4',
    '2.16.3',
    '2.16.2',
    '2.16.1',
    '2.16.0',
    '2.15.13',
    '2.15.12',
    '2.15.11',
    '2.15.10',
    '2.15.9',
    '2.15.8',
    '2.15.7',
    '2.15.6',
    '2.15.5',
    '2.15.4',
    '2.15.3',
    '2.15.2',
    '2.15.1',
    '2.15.0',
    '2.14.18',
    '2.14.17',
    '2.14.16',
    '2.14.15',
    '2.14.14',
    '2.14.13',
    '2.14.12',
    '2.14.11',
    '2.14.10',
    '2.14.9',
    '2.14.8',
    '2.14.7',
    '2.14.6',
    '2.14.5',
    '2.14.4',
    '2.14.3',
    '2.13.13',
    '2.13.12',
    '2.13.11',
    '2.13.10',
    '2.13.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+ansible.com -- $SHELL -i',
    'ansible',
  ] as const,
  fullPath: 'ansible.com' as const,
}

export type AnsiblecomSHELLiPackage = typeof ansiblecomSHELLiPackage
